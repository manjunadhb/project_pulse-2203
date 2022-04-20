import React from 'react'

function ApplyLeave() {
  return (
    <div>  
    <h1>Apply Leave</h1>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb pmd-breadcrumb">
            <li class="breadcrumb-item">
                <a href="/SignInStudent/Home">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Apply Leave</li>
        </ol>
    </nav>

    <div class="page-content one">
        {/* <!-- Apply Leave Form --> */}
        <div class="card pmd-card single-col-form">
            <form id="apply-leave" method="post" action="" novalidate="novalidate">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group pmd-textfield pmd-textfield-floating-label">
                                <label for="leave-type">Leave Type</label>
                                <select name="leave-type" id="leave-type" class="form-control" title="Please select a Leave Type" required="">
                                    <option></option>
                                    <option>Sick Leave</option>
                                    <option>Casual Leave</option>
                                    <option>Unpaid Leave</option>
                                    <option>Hourly Leave</option>
                                </select><span class="pmd-textfield-focused"></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group pmd-textfield pmd-textfield-floating-label">
                                <label class="control-label" for="datepickerstart">Start Date</label>
                                <input type="text" class="form-control" id="datepickerstart" name="datepickerstart"></input>
                                    <span class="pmd-textfield-focused"></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group pmd-textfield pmd-textfield-floating-label">
                                <label class="control-label" for="datepickerend">End Date</label>
                                <input type="text" class="form-control" id="datepickerend" name="datepickerend"></input>
                                    <span class="pmd-textfield-focused"></span>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group pmd-textfield pmd-textfield-floating-label">
                                <label>Reason</label>
                                <textarea class="form-control" id="reason" name="reason"></textarea><span class="pmd-textfield-focused"></span>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="custom-control custom-checkbox pmd-checkbox">
                                <input class="custom-control-input" type="checkbox" value="" id="inverse_defaultCheck1"></input>
                                <label class="custom-control-label" for="inverse_defaultCheck1">
                                    Is it a Half Day?
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary pmd-ripple-effect pmd-btn-raised" name="applyleave" value="Apply Leave">Apply Leave</button> 
                    <a href="" class="btn btn-outline-secondary pmd-ripple-effect">Cancel</a>
                </div>
            </form>
        </div>
    </div>
    
    
    
    
    
    
    
    
    
    </div>



  )}

export default ApplyLeave