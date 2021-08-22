import React, { useEffect, useState } from "react";
import ReactExport from "react-export-excel";
import { mainAPI } from "../api";
import { useSelector } from "react-redux";
import language from "../translation/language.json";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Download = () => {
  const { user } = useSelector((state) => state.user);
  const { activeLanguage } = useSelector((state) => state.languages);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      await mainAPI
        .get(`Payment/getAllTransactions/${user}`, {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("token") || sessionStorage.getItem("token")
            }`,
          },
        })
        .then((response) => setTransactions(response.data));
    };

    getTransactions();
  }, [user]);

  return (
    <div className='download-wrapper'>
      <ExcelFile
        element={
          <button className='btn'>
            {language[activeLanguage].excelTransaction.button}
            <i className='far fa-file-excel'></i>
          </button>
        }>
        <ExcelSheet data={transactions} name='Transactions'>
          <ExcelColumn
            label={language[activeLanguage].excelTransaction.oldBalance}
            value='oldBalance'
          />
          <ExcelColumn
            label={language[activeLanguage].excelTransaction.amount}
            value='amount'
          />
          <ExcelColumn
            label={language[activeLanguage].excelTransaction.dateTime}
            value='dateTime'
          />
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
};

export default Download;
