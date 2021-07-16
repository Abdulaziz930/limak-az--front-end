import React from 'react'

const CalculatorWrapper = () => {
    return (
        <div>
            <div className='calculator mt-4'>
              <div className='calculator-title'>
                <h4>Kalkulyator</h4>
                <button className='btn'>Kalkulyatoru sıfırla</button>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='country-wrapper'>
                    <div className='form-group'>
                      <select className='form-control' id='country'>
                        <option defaultValue>Türkiyə</option>
                        <option>Amerika</option>
                      </select>
                    </div>
                  </div>
                  <div className='weight-wrapper'>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='form-control'
                        aria-label='Text input with dropdown button'
                        placeholder='Çəki'
                      />
                      <div className='input-group-append'>
                        <div className='form-group'>
                          <select className='form-control' id='weight'>
                            <option>kq</option>
                            <option>qram</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='width-wrapper'>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='form-control'
                        aria-label='Text input with dropdown button'
                        placeholder='En'
                      />
                      <div className='input-group-append'>
                        <div className='form-group'>
                          <select className='form-control' id='width'>
                            <option>sm</option>
                            <option>m</option>
                            <option>dm</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='height-wrapper'>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='form-control'
                        aria-label='Text input with dropdown button'
                        placeholder='Hündürlük'
                      />
                      <div className='input-group-append'>
                        <div className='form-group'>
                          <select className='form-control' id='height'>
                            <option>sm</option>
                            <option>m</option>
                            <option>dm</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='city-wrapper'>
                    <div className='form-group'>
                      <select className='form-control' id='city'>
                        <option defaultValue>Bakı</option>
                        <option>Gəncə</option>
                      </select>
                    </div>
                  </div>
                  <div className='count-input-wrapper'>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='count'
                        placeholder='Bağlama sayı'
                      />
                    </div>
                  </div>
                  <div className='length-wrapper'>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='form-control'
                        aria-label='Text input with dropdown button'
                        placeholder='Uzunluq'
                      />
                      <div className='input-group-append'>
                        <div className='form-group'>
                          <select className='form-control' id='length'>
                            <option>sm</option>
                            <option>m</option>
                            <option>dm</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='type-wrapper'>
                    <div className='form-group'>
                      <select className='form-control' id='type'>
                        <option defaultValue>Standart</option>
                        <option>Maye</option>
                      </select>
                    </div>
                  </div>
                  <div className='btnbox'>
                    <button className='btn'>Hesabla</button>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='sum'>
                    <p className='sum-text'>Cəmi</p>
                    <p className='sum-count'>$0.00</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default CalculatorWrapper
