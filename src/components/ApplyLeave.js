import React from 'react'

function ApplyLeave() {
  return (
    <div>

    <h1> Apply Leave</h1>
    <h3>choose leave type and dates to apply for leave</h3>

  <form class="jotform-form" action="/form-templates/preview/thank-you/classic?" method="post" name="form_210481556101950" id="210481556101950" accept-charset="utf-8" autocomplete="on" novalidate="true">
    <input type="hidden" name="formID" value="210481556101950">
    <input type="hidden" id="JWTContainer" value="">
    <input type="hidden" id="cardinalOrderNumber" value="">
    <div role="main" class="form-all" style="margin:0 auto;">
    <style>.form-all:before {}</style>
    <ul class="form-section page-section">
    <li id="cid_1" class="form-input-wide" data-type="control_head">
    <div class="form-header-group header-large">
    <div class="header-text httal htvam">
    <h2 id="header_1" class="form-header" data-component="header">Request for Leave</h2>
    <div id="subHeader_1" class="form-subHeader">Request your leave details down below.</div>
    </div>
    </div>
    </li>
    <li class="form-line" data-type="control_fullname" id="id_3">
    <label class="form-label form-label-left form-label-auto" id="label_3" for="first_3"> Name </label>
     <div id="cid_3" class="form-input" data-layout="full">
     <div data-wrapper-react="true">
     <span class="form-sub-label-container" style="vertical-align:top" data-input-type="first">
     <input type="text" id="first_3" name="q3_name[first]" class="form-textbox" data-defaultvalue="" autocomplete="section-input_3 given-name" size="10" value="" data-component="first" aria-labelledby="label_3 sublabel_3_first"></input>
     <label class="form-sub-label" for="first_3" id="sublabel_3_first" style="min-height:13px" aria-hidden="false"> First Name </label>
     </span>
     <span class="form-sub-label-container" style="vertical-align:top" data-input-type="last">
     <input type="text" id="last_3" name="q3_name[last]" class="form-textbox" data-defaultvalue="" autocomplete="section-input_3 family-name" size="15" value="" data-component="last" aria-labelledby="label_3 sublabel_3_last"></input>
     <label class="form-sub-label" for="last_3" id="sublabel_3_last" style="min-height:13px" aria-hidden="false"> Last Name </label>
     </span>
     </div>
     </div>
     </li>
     <li class="form-line" data-type="control_number" id="id_7">
     <label class="form-label form-label-left form-label-auto" id="label_7" for="input_7"> Employee ID </label>
     <div id="cid_7" class="form-input" data-layout="half">
     <span class="form-sub-label-container" style="vertical-align:top">
     <input type="number" id="input_7" name="q7_employeeId" data-type="input-number" class=" form-number-input form-textbox validate[Numeric]" data-defaultvalue="" style="width:310px" size="310" value="" placeholder="ex: 12345678" data-component="number" aria-labelledby="label_7 sublabel_input_7" step="any"></input>
     <label class="form-sub-label" for="input_7" id="sublabel_input_7" style="min-height:13px" aria-hidden="false"> 8 digit employee ID </label>
     </span>
     </div>
     </li>
     <li class="form-line" data-type="control_email" id="id_14">
     <label class="form-label form-label-left form-label-auto" id="label_14" for="input_14"> Email </label>
     <div id="cid_14" class="form-input" data-layout="half">
     <span class="form-sub-label-container" style="vertical-align:top">
     <input type="email" id="input_14" name="q14_email" class="form-textbox validate[Email]" data-defaultvalue="" style="width:310px" size="310" value="" data-component="email" aria-labelledby="label_14 sublabel_input_14"></input>
     <label class="form-sub-label" for="input_14" id="sublabel_input_14" style="min-height:13px" aria-hidden="false"> example@example.com </label>
     </span>
     </div>
     </li>
     <li class="form-line" data-type="control_phone" id="id_6">
     <label class="form-label form-label-left form-label-auto" id="label_6" for="input_6_area"> Phone Number </label>
     <div id="cid_6" class="form-input" data-layout="half"><div data-wrapper-react="true">
     <span class="form-sub-label-container" style="vertical-align:top" data-input-type="areaCode">
     <input type="tel" id="input_6_area" name="q6_phoneNumber6[area]" class="form-textbox" data-defaultvalue="" autocomplete="section-input_6 tel-area-code" value="" data-component="areaCode" aria-labelledby="label_6 sublabel_6_area"></input>
     <span class="phone-separate" aria-hidden="true">&nbsp;-</span>
     <label class="form-sub-label" for="input_6_area" id="sublabel_6_area" style="min-height:13px" aria-hidden="false"> Area Code </label>
     </span>
     <span class="form-sub-label-container" style="vertical-align:top" data-input-type="phone">
     <input type="tel" id="input_6_phone" name="q6_phoneNumber6[phone]" class="form-textbox" data-defaultvalue="" autocomplete="section-input_6 tel-local" value="" data-component="phone" aria-labelledby="label_6 sublabel_6_phone"></input>
     <label class="form-sub-label" for="input_6_phone" id="sublabel_6_phone" style="min-height:13px" aria-hidden="false"> Phone Number </label>
     </span>
     </div>
     </div>
     </li>
     <li class="form-line" data-type="control_textbox" id="id_4">
     <label class="form-label form-label-left form-label-auto" id="label_4" for="input_4"> Position </label>
     <div id="cid_4" class="form-input" data-layout="half">
     <input type="text" id="input_4" name="q4_position" data-type="input-textbox" class="form-textbox" data-defaultvalue="" style="width:310px" size="310" value="" placeholder=" " data-component="textbox" aria-labelledby="label_4"></input>
     </div>
     </li>
     <li class="form-line" data-type="control_textbox" id="id_5">
     <label class="form-label form-label-left form-label-auto" id="label_5" for="input_5"> Manager </label>
     <div id="cid_5" class="form-input" data-layout="half">
     <input type="text" id="input_5" name="q5_manager" data-type="input-textbox" class="form-textbox" data-defaultvalue="" style="width:310px" size="310" value="" placeholder=" " data-component="textbox" aria-labelledby="label_5"></input>
     </div>
     </li>
     <li class="form-line" data-type="control_email" id="id_15">
     <label class="form-label form-label-left form-label-auto" id="label_15" for="input_15"> Manager Email </label>
     <div id="cid_15" class="form-input" data-layout="half"><span class="form-sub-label-container" style="vertical-align:top">
     <input type="email" id="input_15" name="q15_managerEmail15" class="form-textbox validate[Email]" data-defaultvalue="" style="width:310px" size="310" value="" data-component="email" aria-labelledby="label_15 sublabel_input_15"></input>
       <label class="form-sub-label" for="input_15" id="sublabel_input_15" style="min-height:13px" aria-hidden="false"> example@example.com </label>
     </span>
     </div>
     </li>
     <li id="cid_8" class="form-input-wide" data-type="control_head">
     <div class="form-header-group header-small">
     <div class="header-text httal htvam">
     <h3 id="header_8" class="form-header" data-component="header">Details of Leave</h3>
     </div>
     </div>
     </li>
     <li class="form-line" data-type="control_datetime" id="id_10">
     <label class="form-label form-label-left form-label-auto" id="label_10" for="month_10"> Leave Start </label>
     <div id="cid_10" class="form-input" data-layout="half"><div data-wrapper-react="true" class="extended notLiteMode">
     <span class="form-sub-label-container month" style="vertical-align:top">
     <input type="tel" class="form-textbox validate[limitDate]" id="month_10" name="q10_leaveStart[month]" size="2" data-maxlength="2" data-age="" maxlength="2" value="04" autocomplete="section-input_10 off" aria-labelledby="label_10 sublabel_10_month" inputmode="numeric"></input>
     <span class="date-separate" aria-hidden="true">&nbsp;-</span>
     <label class="form-sub-label" for="month_10" id="sublabel_10_month" style="min-height:13px" aria-hidden="false"> Month </label>
     </span>
     <span class="form-sub-label-container day" style="vertical-align:top">
     <input type="tel" class="currentDate form-textbox validate[limitDate]" id="day_10" name="q10_leaveStart[day]" size="2" data-maxlength="2" data-age="" maxlength="2" value="19" autocomplete="section-input_10 off" aria-labelledby="label_10 sublabel_10_day" inputmode="numeric"></input>
     <span class="date-separate" aria-hidden="true">&nbsp;-</span>
     <label class="form-sub-label" for="day_10" id="sublabel_10_day" style="min-height:13px" aria-hidden="false"> Day </label>
     </span>
     <span class="form-sub-label-container year" style="vertical-align:top">
     <input type="tel" class="form-textbox validate[limitDate]" id="year_10" name="q10_leaveStart[year]" size="4" data-maxlength="4" data-age="" maxlength="4" value="2022" autocomplete="section-input_10 off" aria-labelledby="label_10 sublabel_10_year"></input>
     <label class="form-sub-label" for="year_10" id="sublabel_10_year" style="min-height:13px" aria-hidden="false"> Year </label>
     </span>
     <span class="form-sub-label-container" style="vertical-align:top">
       <img class=" newDefaultTheme-dateIcon icon-seperatedMode" alt="Pick a Date" id="input_10_pick" src="https://cdn.jotfor.ms/images/calendar.png" data-component="datetime" aria-hidden="true" data-allow-time="No" data-version="v2"></img>
         <label class="form-sub-label" for="input_10_pick" style="border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap" aria-hidden="true"> Date Picker Icon </label>
     </span>
     </div>
     </div>
     </li>
     <li class="form-line" data-type="control_datetime" id="id_11">
     <label class="form-label form-label-left form-label-auto" id="label_11" for="month_11"> Leave End </label>
     <div id="cid_11" class="form-input" data-layout="half">
     <div data-wrapper-react="true" class="extended notLiteMode">
     <span class="form-sub-label-container month" style="vertical-align:top">
     <input type="tel" class="form-textbox validate[limitDate]" id="month_11" name="q11_leaveEnd[month]" size="2" data-maxlength="2" data-age="" maxlength="2" value="04" autocomplete="section-input_11 off" aria-labelledby="label_11 sublabel_11_month" inputmode="numeric"></input>
     <span class="date-separate" aria-hidden="true">&nbsp;-</span>
     <label class="form-sub-label" for="month_11" id="sublabel_11_month" style="min-height:13px" aria-hidden="false"> Month </label>
     </span>
     <span class="form-sub-label-container day" style="vertical-align:top">
     <input type="tel" class="currentDate form-textbox validate[limitDate]" id="day_11" name="q11_leaveEnd[day]" size="2" data-maxlength="2" data-age="" maxlength="2" value="19" autocomplete="section-input_11 off" aria-labelledby="label_11 sublabel_11_day" inputmode="numeric"></input>
     <span class="date-separate" aria-hidden="true">&nbsp;-</span>
     <label class="form-sub-label" for="day_11" id="sublabel_11_day" style="min-height:13px" aria-hidden="false"> Day </label>
     </span>
     <span class="form-sub-label-container year" style="vertical-align:top">
     <input type="tel" class="form-textbox validate[limitDate]" id="year_11" name="q11_leaveEnd[year]" size="4" data-maxlength="4" data-age="" maxlength="4" value="2022" autocomplete="section-input_11 off" aria-labelledby="label_11 sublabel_11_year"></input>
     <label class="form-sub-label" for="year_11" id="sublabel_11_year" style="min-height:13px" aria-hidden="false"> Year </label>
     </span>
     <span class="form-sub-label-container" style="vertical-align:top">
     <img class=" newDefaultTheme-dateIcon icon-seperatedMode" alt="Pick a Date" id="input_11_pick" src="https://cdn.jotfor.ms/images/calendar.png" data-component="datetime" aria-hidden="true" data-allow-time="No" data-version="v2"></img>
     <label class="form-sub-label" for="input_11_pick" style="border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap" aria-hidden="true"> Date Picker Icon </label>
     </span>
     </div>
     </div>
     </li>
     <li class="form-line" data-type="control_radio" id="id_9"><label class="form-label form-label-left form-label-auto" id="label_9" for="input_9"> Leave Type </label>
     <div id="cid_9" class="form-input" data-layout="full">
     <div class="form-multiple-column" data-columncount="2" role="group" aria-labelledby="label_9" data-component="radio">
     <span class="form-radio-item">
       <span class="dragger-item">
         </span>
         <input type="radio" aria-describedby="label_9" class="form-radio" id="input_9_0" name="q9_leaveType" value="Vacation"></input>
           <label id="label_input_9_0" for="input_9_0"> Vacation </label>
           </span>
           <span class="form-radio-item">
             <span class="dragger-item">
               </span>
               <input type="radio" aria-describedby="label_9" class="form-radio" id="input_9_1" name="q9_leaveType" value="Sick"></input>
                 <label id="label_input_9_1" for="input_9_1"> Sick </label>
                 </span>
                 <span class="form-radio-item" style="clear:left">
                   <span class="dragger-item">
                     </span>
                     <input type="radio" aria-describedby="label_9" class="form-radio" id="input_9_2" name="q9_leaveType" value="Quitting"></input>
                       <label id="label_input_9_2" for="input_9_2"> Quitting </label>
                       </span>
                       <span class="form-radio-item formRadioOther">
                         <input type="radio" class="form-radio-other form-radio" name="q9_leaveType" id="other_9" value="other" tabindex="0" aria-label="Other"></input>
                           <label id="label_other_9" style="text-indent:0" for="other_9"> Other </label>
                           <span id="other_9_input" class="other-input-container is-none" style="">
                             <input type="text" class="form-radio-other-input form-textbox" name="q9_leaveType[other]" data-otherhint="Other" size="15" id="input_9" data-placeholder="Please type another option here" placeholder="Please type another option here"></input>
                               </span>
                               </span>
                               </div>
                               </div>
                               </li>
                               <li class="form-line" data-type="control_textarea" id="id_12">
                                 <label class="form-label form-label-top" id="label_12" for="input_12"> Comments </label>
                                 <div id="cid_12" class="form-input-wide" data-layout="full">
                                   <textarea id="input_12" class="form-textarea" name="q12_comments" style="width:648px;height:163px" data-component="textarea" aria-labelledby="label_12"></textarea>
                                   </div>
                                   </li>
                                   <li class="form-line" data-type="control_button" id="id_2">
                                     <div id="cid_2" class="form-input-wide" data-layout="full">
                                       <div data-align="auto" class="form-buttons-wrapper form-buttons-auto jsTest-button-wrapperField">
                                         <button id="input_2" type="submit" class="form-submit-button submit-button jf-form-buttons jsTest-submitField" data-component="button" data-content="">Request Leave</button>
                                         </div>
                                         </div>
                                         </li>
                                         <li style="display:none">Should be Empty:<input type="text" name="website" value=""></input></li>
                                         </ul>
                                         </div>
                                         <input type="hidden" class="simple_spc" id="simple_spc" name="simple_spc" value="210481556101950-210481556101950"></input>
                                           <input type="hidden" name="embedUrl" value="https://www.jotform.com/form-templates/request-for-leave"></input>
                                           </input>
                                           </input>
                                           </input>
                                           
                                              
                                              </form>
   
                                              </div>
   )
   ; 
   <div>
       </div>
                                              
                                            
  
}

export default ApplyLeave