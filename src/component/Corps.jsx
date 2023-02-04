import React from 'react'
import im1 from '../images/annim.png';

const Corps = () => {

    return (
        <div class="container">
            <div class="row  ">

                <div class="col-sm-6">
                    <div class="row border-0" style={{ backgroundColor: 'white' }}>
                        <div class="col-5 col-sm-6">
                            <div class="card-column">
                                <img src={im1} className="card-img-top my-3" alt="..." style={{ width: '200px', height: '150px' }} />
                            </div>
                        </div>
                        <div class="col-4 col-sm-6">
                            <div className="d-flex">
                                <div className="card-columns">
                                    <div class="card p-3 mx-auto  border-0" id="c1" style={{ width: '35rem', height: '180px' }} >
                                        <div class="card-body">

                                            <h5 class="card-title text-gras">عنوان هام جداً</h5>
                                            <p class="card-text text-small">هناك حقيقة مثبتة منذ زمان طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص</p>

                                            <form class="d-flex input-group-append " >
                                                <input class="form-control   me-2 text-small "align="right" type="search" placeholder="...ابحث" aria-label="Search" style={{ width: '200px', height: '30px' }} />

                                            </form>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>


    )


}
export default Corps;