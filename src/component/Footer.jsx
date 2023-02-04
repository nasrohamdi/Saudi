import React from 'react'
import logo from "../images/logo.png"

import im17 from "../images/fgr.png"
import im18 from "../images/instgr.png"
import im19 from "../images/snapgr.png"
import im20 from "../images/tweetgr.png"

const Footer=()=>{

return(
<div className="container"style={{backgroundColor:'white'}}>
<p class="card-text"><small class="text-muted disp1">
                   <small class="disp2">
                   <img class="imp3" src={im20} alt=""></img>
                   <img class="imp3" src={im19} alt=""></img>
                   <img class="imp3" src={im18} alt=""></img>
                   <img class="imp3" src={im17} alt=""></img>
                   </small>
                  
                   <h5 class="disp text-small3">
                       <ul style={{width:'100px'}}>ﺗﻮاﺻﻞ ﻣﻌﻨﺎ </ul>
                       <ul style={{width: '120px'}}>سياسة الإستخدام</ul>
                       <ul style={{width: '130px'}}>سياسة الخصوصية  </ul>
                       </h5> 
                      
                          <img  src={logo} alt="" style={{width:'100px',height:'30px'}}/>

                



                      </small></p>
        </div>


)


}
export default Footer
  