$(document).on('pageshow', '#sh_waiting_inside', function(){  
//alert("sh_waiting_inside");
  $('.iGallery').imageflip()
$('.ssnewinpw').empty();

$('.proof').show();

$('#sda_newcwwocc').empty();
$('#lii_newcwwocc').empty();
$('#firstw').empty();
$('.waiting_imagea').empty();
$('.waiting_imageb').empty()
$('.waiting_imagec').empty()
$('.waiting_imaged').empty()
$('.waiting_imagee').empty()
$('.waiting_imagef').empty()

$(document).off('click', '#dashcooiuoiiqww').on('click', '#dashcooiuoiiqww', function() {

  $.mobile.changePage($('#dashboard_sh'), { transition: "none", changeHash: true, reverse: false });
return false;
});

  $(document).off('click', '#erdsfqww').on('click', '#erdsfqww', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_new_veri_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

 $(document).off('click', '#inprogresscooiuoiiqww').on('click', '#inprogresscooiuoiiqww', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

  $(document).off('click', '#waitinguoiiqww').on('click', '#waitinguoiiqww', function() {
  //sessionStorage.getItem.clear;
 
  $.mobile.changePage($('#sh_waiting_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});
   
 $(document).off('click', '#shapproveduoiiqww').on('click', '#shapproveduoiiqww', function() {
  //sessionStorage.getItem.clear;
 
  $.mobile.changePage($('#sh_tobe_approved_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

      $(document).off('click', '#completedshuoiiiqww').on('click', '#completedshuoiiiqww', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_completed_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});
                  $(document).off('click', '#shnotveriuoiqww').on('click', '#shnotveriuoiqww', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

            $(document).off('click', '#rejectieiuoiiqww').on('click', '#rejectieiuoiiqww', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_reject_listio'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#verifaluoiiqww').on('click', '#verifaluoiiqww', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_Verified_false'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#before_new_listrtr').on('click', '#before_new_listrtr', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_waiting_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

    $(document).off('click', '#signoutcooiiiqww').on('click', '#signoutcooiiiqww', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});
  

sh_regionarray = JSON.parse(sessionStorage.getItem("sh_regionarray"));
  user_obja = JSON.parse(sessionStorage.getItem("currentobj"));

currentobja_addressid = JSON.parse(sessionStorage.getItem("currentobja_addressid"));
//alert( currentobja_addressid.user_id + 'address no');
currentobj_educational_records = JSON.parse(sessionStorage.getItem("currentobj_educational_records"));
//alert( currentobj_educational_records.user_id+'education no');
//currentobj_employment_records = JSON.parse(sessionStorage.getItem("currentobj_employment_records"));
addressid_records_array =  JSON.parse(sessionStorage.getItem("sh_addressid_records_array"));

currentobj_employment_records =  JSON.parse(sessionStorage.getItem("currentobj_employment_records"));
//alert(currentobj_employment_records.user_id+'employment');

 employment_upload_array =  JSON.parse(sessionStorage.getItem("sh_multiple_documents_array"));

 supervisor_roleid_array =  JSON.parse(sessionStorage.getItem("supervisor_roleid_array"));

insertassign_employment_array =  JSON.parse(sessionStorage.getItem("insertassign_employment_array"));
insertassign_education_array =  JSON.parse(sessionStorage.getItem("insertassign_education_array"));
insertassign_address_array =  JSON.parse(sessionStorage.getItem("insertassign_address_array"));

supervisor_final_commanda =  JSON.parse(sessionStorage.getItem("supervisor_final_commanda"));

coordinator_final_commanda = JSON.parse(sessionStorage.getItem("coordinator_final_commanda"));


bank_inpro =  JSON.parse(sessionStorage.getItem("bank_inpro"));
assest_inpro =  JSON.parse(sessionStorage.getItem("assest_inpro"));
address_veriia =  JSON.parse(sessionStorage.getItem("address_veriia"));
referencea =  JSON.parse(sessionStorage.getItem("referencea"));

distr_residentiala =  JSON.parse(sessionStorage.getItem("distr_residentiala"));
dist_detailsa =  JSON.parse(sessionStorage.getItem("dist_detailsa"));


web_veria =  JSON.parse(sessionStorage.getItem("web_veria"));
supplier_venda =  JSON.parse(sessionStorage.getItem("supplier_venda"));
ware_housa =  JSON.parse(sessionStorage.getItem("ware_housa"));
common_addressa =  JSON.parse(sessionStorage.getItem("common_addressa"));

driving_lica = JSON.parse(sessionStorage.getItem("driving_lica"));
credential_deta = JSON.parse(sessionStorage.getItem("credential_deta"));
identity_deta = JSON.parse(sessionStorage.getItem("identity_deta"));
professional_deta = JSON.parse(sessionStorage.getItem("professional_deta"));
bankruptcy_deta = JSON.parse(sessionStorage.getItem("bankruptcy_deta"));

sh_regionarray =  JSON.parse(sessionStorage.getItem("sh_regionarray"));

 //alert(sh_regionarray);

if(sh_regionarray == null){
//alert('ppp');
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
}

var region=sh_regionarray.co_region;
//alert(region+'regi'); 

var qualification_id = user_obja.type;
//alert(qualification_id+'qualification_id');
var verification_user_id = user_obja.verification_user_id;
//alert(verification_user_id+'verification_user_id');



var superfin =supervisor_final_commanda;
if (superfin !== null){
$("#supp_shccp").text(supervisor_final_commanda.final_Command);
}
var cofin =coordinator_final_commanda;
if( cofin !== null){
$("#co_shc").text(coordinator_final_commanda.comment);
}

for(a=0;a<supervisor_roleid_array.length;a++){
  super_obj = supervisor_roleid_array[a];
//alert(super_obj.Username);	
$('#firstw').append( '<option value="'+super_obj.Username+'">'+super_obj.Username+'</option>');
}

if(qualification_id == '66' ){
  //alert('bankrupcy verification');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.bank_name+'</p><span class="pri_span">Bank Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.account_type+'</p><span class="pri_span">Type of Account</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+bankruptcy_deta.branch_name+'</p><span class="pri_span">Branch Name</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.name_institution+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+bankruptcy_deta.address+'&nbsp;To &nbsp;'+bankruptcy_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.credential+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.pan_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.country+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.pincode+'</p></li>'
$('#lii_newcwwocc').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '69' ){
  //alert('identity verification');

/*var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.name_prof+'</p><span class="pri_span">Name of the Istitution</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.licence_no+'</p><span class="pri_span">Licence No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.doi+'</p><span class="pri_span">Date of Issue</span></div>'
$('#sda_newcw').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.name_institution+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+professional_deta.address+'&nbsp;To &nbsp;'+professional_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.credential+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newcw').append(liii);
*/
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/professinol-icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.name_prof+'</p><span class="pri_span">Name of the Istitution</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.licence_no+'</p><span class="pri_span">Licence No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+professional_deta.doi+'</p><span class="pri_span">Date of Issue</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.name_institution+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+professional_deta.address+'&nbsp;To &nbsp;'+professional_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.credential+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+professional_deta.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newcwwocc').append(liii);

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '65' ){
  //alert('identity');

/*var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.idname+'</p><span class="pri_span">ID Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.idnumber+'</p><span class="pri_span">ID Number</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.doi+'</p><span class="pri_span">Date of Issue</span></div>'
$('#sda_newcw').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+identity_deta.bank_name+'&nbsp;To &nbsp;'+identity_deta.bank_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.account_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.ifsc_code+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.idnumber+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.street+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.country+'</p></li>'
$('#lii_newcw').append(liii);
*/

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.idname+'</p><span class="pri_span">ID Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.idnumber+'</p><span class="pri_span">ID Number</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+identity_deta.doi+'</p><span class="pri_span">Date of Issue</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+identity_deta.bank_name+'&nbsp;To &nbsp;'+identity_deta.bank_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.account_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.ifsc_code+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.idnumber+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.street+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+identity_deta.country+'</p></li>'
$('#lii_newcwwocc').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '39' ){
  //alert('credential verification');

/*var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Credential-name--icon.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.credential_name+'</p><span class="pri_span">Credential Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.credential+'</p><span class="pri_span">Vaild Upto</span></div>'
$('#sda_newcw').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+credential_deta.name+'&nbsp;To &nbsp;'+credential_deta.credential_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.credential+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.credential_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.credential+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.valid+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.pincode+'</p></li>'
$('#lii_newcw').append(liii);
*/
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Credential-name--icon.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.credential_name+'</p><span class="pri_span">Credential Name</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+credential_deta.credential+'</p><span class="pri_span">Vaild Upto</span></div>'
$('#sda_newcwwocc').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+credential_deta.name+'&nbsp;To &nbsp;'+credential_deta.credential_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.credential+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.credential_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.credential+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.valid+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+credential_deta.pincode+'</p></li>'
$('#lii_newcwwocc').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '56' ){
  //alert('distributor residential address verification');

/*var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.issuename+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.licenceno+'</p><span class="pri_span">Licence No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.valid+'</p><span class="pri_span">Valid Upto</span></div>'
$('#sda_newcw').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+driving_lica.fname+'&nbsp;To &nbsp;'+driving_lica.bank_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.account_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.ifsc_code+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.fname+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.country+'</p></li>'
$('#lii_newcw').append(liii);
*/
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.issuename+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.licenceno+'</p><span class="pri_span">Licence No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+driving_lica.valid+'</p><span class="pri_span">Valid Upto</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+driving_lica.fname+'&nbsp;To &nbsp;'+driving_lica.bank_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.account_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.ifsc_code+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.fname+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+driving_lica.country+'</p></li>'
$('#lii_newcwwocc').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '43' ){
 // alert('web verifi details 43');

/*var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.company_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.district+'</p><span class="pri_span">district</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+web_veria.pincode+'</p><span class="pri_span">pincode</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.company_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+web_veria.registration_no+'&nbsp;To &nbsp;'+web_veria.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.tin_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.pincode+'</p></li>'
$('#lii_newcwwocc').append(liii);
*/
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.company_name+'</p><span class="pri_span">Company / Office</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/employmentid_icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.district+'</p><span class="pri_span">Employee ID</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+web_veria.designation+'</p><span class="pri_span">Designation</span></div>'
$('#sda_newcwwocc').append(sd);

//svar liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.company_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+web_veria.registration_no+'&nbsp;To &nbsp;'+web_veria.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.tin_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.pincode+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.company+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.employee_id+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.designation+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+web_veria.country+'</p></li>'
$('#lii_newcwwocc').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '47' ){
  //alert('supplier details 47');

/*var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.company_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.district+'</p><span class="pri_span">district</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.pincode+'</p><span class="pri_span">pincode</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.company_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+supplier_venda.registration_no+'&nbsp;To &nbsp;'+supplier_venda.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.tin_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.pincode+'</p></li>'
$('#lii_newcwwocc').append(liii);
*/

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.supplier_name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.registration_no+'</p><span class="pri_span">Registration No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+supplier_venda.registration_date+'</p><span class="pri_span">Date of Registration</span></div>'
$('#sda_newcwwocc').append(sd);

//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.company_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+supplier_venda.registration_no+'&nbsp;To &nbsp;'+supplier_venda.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.tin_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.pincode+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.registration_no+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.license_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.tin_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+supplier_venda.district+'</p></li>'
$('#lii_newcwwocc').append(liii);

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '45' ){
  //alert('ware house details 45');

/*var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.warehouse_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.sunit+'</p><span class="pri_span">district</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.street+'</p><span class="pri_span">pincode</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.warehouse_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+ware_housa.sunit+'&nbsp;To &nbsp;'+ware_housa.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.tin_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.state+'</p></li>'
$('#lii_newcwwocc').append(liii);
*/
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/warehousename-icon.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.warehouse_name+'</p><span class="pri_span">Ware House Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Permiter-use.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.permit+'</p><span class="pri_span">Permitted Use</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/suit-unit-icon.png" class="iomg" alt=""><p class="pri_p">'+ware_housa.sunit+'</p><span class="pri_span">Suit/Unit</span></div>'
$('#sda_newcwwocc').append(sd);

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.warehouse_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.street+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+ware_housa.country+'</p></li>'
$('#lii_newcwwocc').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert('oneemploy');
var oneemp=employimg_obj.document;
//alert('oneemp');
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40'){
  //alert('common details 42 44 46');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Address1+'</p><span class="pri_span">Address1</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Designation-icon.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Address2+'</p><span class="pri_span">Address2</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+common_addressa.Current_Taluk+'</p><span class="pri_span">Taluk</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Address1+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+common_addressa.registration_no+'&nbsp;To &nbsp;'+common_addressa.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Address2+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Taluk+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+common_addressa.Current_Zipcode+'</p></li>'
$('#lii_newcwwocc').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}



if(qualification_id == '41' ){
  //alert('distributor details 41');

/*var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.company_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.district+'</p><span class="pri_span">district</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.pincode+'</p><span class="pri_span">pincode</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.company_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+dist_detailsa.registration_no+'&nbsp;To &nbsp;'+dist_detailsa.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.tin_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.pincode+'</p></li>'
$('#lii_newcwwocc').append(liii);
*/
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/companyname-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.company_name+'</p><span class="pri_span">Company Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/ID-Number-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.registration_no+'</p><span class="pri_span">Registration No</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Dateofissue-icon.png" class="iomg" alt=""><p class="pri_p">'+dist_detailsa.registration_date+'</p><span class="pri_span">Date of Registration</span></div>'
$('#sda_newcwwocc').append(sd);

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.company_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.cr_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.license_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+dist_detailsa.district+'</p></li>'
$('#lii_newcwwocc').append(liii);

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}



if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
  //alert('reference');

/*var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+referencea.address+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+referencea.task_name+'</p><span class="pri_span">Salary</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+referencea.account_type+'</p><span class="pri_span">City</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+referencea.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+referencea.bank_name+'&nbsp;To &nbsp;'+referencea.bank_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+referencea.account_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+referencea.ifsc_code+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+referencea.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newcwwocc').append(liii);
*/
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.landmark+'</p><span class="pri_span">Landmark</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+referencea.street+'</p><span class="pri_span">Street</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+referencea.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+referencea.bank_name+'&nbsp;To &nbsp;'+referencea.bank_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+referencea.account_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+referencea.ifsc_code+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+referencea.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newcwwocc').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}


if(qualification_id == '29'  || qualification_id == '31'){
  //alert('address verrrrrr');

/*var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.address+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.address+'</p><span class="pri_span">Salary</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.landmark+'</p><span class="pri_span">City</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+address_veriia.bank_name+'&nbsp;To &nbsp;'+address_veriia.bank_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.account_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.ifsc_code+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newcwwocc').append(liii);
*/
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.address+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.landmark+'</p><span class="pri_span">Landmark</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/street-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+address_veriia.street+'</p><span class="pri_span">Street</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.address+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.district+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+address_veriia.district+'</p></li>'
$('#lii_newcwwocc').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}

}

}

if(qualification_id == '64'){
  //alert('bank');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/BankVerification_icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.bank_name+'</p><span class="pri_span">Bank Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/Type-of-Account-icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.account_type+'</p><span class="pri_span">Type of Account</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/Branch-Name_icon.png" class="iomg" alt=""><p class="pri_p">'+bank_inpro.branch_name+'</p><span class="pri_span">Branch Name</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.name_institution+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+bankruptcy_deta.address+'&nbsp;To &nbsp;'+bankruptcy_deta.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.credential+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.address1+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bankruptcy_deta.branch_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.pan_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.landmark+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.country+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+bank_inpro.pincode+'</p></li>'
$('#lii_newcwwocc').append(liii);

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

//alert(oneemploy);
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

}
}
}

if(qualification_id == '63' ){
//alert('assest');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/Person-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/lanmark-icon-ref.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.property_type+'</p><span class="pri_span">Property Type</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.doc_no+'</p><span class="pri_span">Document Number</span></div>'
$('#sda_newcwwocc').append(sd);

var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.bank_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.property_type+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.sur_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.patta_no+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.pincode+'</p></li>'
$('#lii_newcwwocc').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

  var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');


}

}

}

if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
//alert('assest');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.patta_no+'</p><span class="pri_span">Salary</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+assest_inpro.doc_no+'</p><span class="pri_span">City</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.sur_no+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+assest_inpro.doc_no+'&nbsp;To &nbsp;'+assest_inpro.working_to+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.sub_off+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+assest_inpro.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/city.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
$('#lii_newcwwocc').append(liii);


for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){

  var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');


}

}

}


if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('emplo inside');

var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employee_final_salary+'</p><span class="pri_span">Salary</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png" class="iomg" alt=""><p class="pri_p">'+currentobj_employment_records.employer_addressone+'</p><span class="pri_span">City</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/from-to.png" alt="" class="li_img_pri"><p class="li_p_pri">From &nbsp;'+currentobj_employment_records.working_from+'&nbsp;To &nbsp;'+currentobj_employment_records.working_to+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_addressone+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_employment_records.employer_zipcode+'</p></li>'
$('#lii_newcwwocc').append(liii);


var oneemploy = new Array(10);
k = -1;
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];

  var empimgempl=employimg_obj.verification_type_id;
  var empidempl=employimg_obj.verification_master_id;


  if(empimgempl == qualification_id && empidempl == verification_user_id ){
var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');



k++;
oneemploy[k]=employimg_obj.document;


if ( k == 0){
  var one=oneemploy[k];
//alert(one+'oneoooooooooooooooooooooooooo');
$('.waiting_imagec').append('<img src="http://staging.eimpressive.com/uploads/'+one+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');


}
if ( k == 1){
  var oneo=oneemploy[k];
//alert(oneo+'two');
$('.waiting_imageb').append('<img src="http://staging.eimpressive.com/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( k == 2){
  var oneoo=oneemploy[k];
//alert(oneoo+'3');
$('.waiting_imagea').append('<img src="http://staging.eimpressive.com/uploads/'+oneoo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( k == 3){
  var oneooo=oneemploy[k];
// alert(oneooo+'4');
$('.waiting_imaged').append('<img src="http://staging.eimpressive.com/uploads/'+oneooo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( k == 4){
  var oner=oneemploy[k];
// alert(oner+'5');
$('.waiting_imagee').append('<img src="http://staging.eimpressive.com/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}

if ( k == 5){
  var oner=oneemploy[k];
// alert(oner+'6');
$('.waiting_imagef').append('<img src="http://staging.eimpressive.com/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}



}

}

}



if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('if education');

/*var sd=' <div class="ui-block-a grid_text grid_right  waves-effect waves-button"><img src="images/from-to.png" alt="" class="img_new">   <span id="designation"></span></div><div class="ui-block-b grid_text grid_right waves-effect waves-button "><img src="images/check-in.png" alt="" class="img_new"><span id="from"></span> </div><div class="ui-block-c grid_text grid_right waves-effect waves-button "><img src="images/save.png" alt="" class="img_new"> <span id="percentage"></span></div> <div class="ui-block-d grid_text waves-effect waves-button "><img src="images/location.png" alt="" class="img_new"> <span id="year_of_passing"></span></div>'
$('#sda_new').append(sd);
var liii='<li class="ui-li-has-icon ui-first- ui-first-child">  <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/mobile/location.png" alt="USA" class="ui-li-icon profile t">  <span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="institute_inproo">512 Rd Oage Mill Rd Palo Alto, CA 94304</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/msg.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="address_inproo">Carterblane@gmail.com</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/institute.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;padding-left: 31px;" id="pincode_inproo">5012 Rd Oage Mill Rd Palo Alto, CA 94304</span></a> </li><li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/world.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="city_inproo">'+city_name+'</span></a></li> <li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/state.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="state_inproo"> '+state+'</span></a></li>'
$('#lii_new').append(liii);*/
var sd='<div class="ui-block-a pri_grid_1 pri_grid_bor"><img src="images/primary/degree-icon.png" class="iomg" alt=""><p class="pri_p">'+user_obja.qualification_name+'</p><span class="pri_span">Task Name</span></div><div class="ui-block-b pri_grid_1 pri_grid_bor"><img src="images/primary/yearofpassing-icon.png" class="iomg" alt=""><p class="pri_p">'+currentobj_educational_records.year_of_passing+'</p><span class="pri_span">Year_of_passing</span></div><div class="ui-block-c pri_grid_1"><img src="images/primary/percentage.png"  class="iomg" alt=""><p class="pri_p">'+currentobj_educational_records.percentage+'</p><span class="pri_span">Percentage</span></div>'
$('#sda_newcwwocc').append(sd);
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.institute_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.institute_name+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.address+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/pincode.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.pincode+'</p></li>'

$('#lii_newcwwocc').append(liii);

var oneemp = new Array(10);
j = -1;
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");
//alert(empid+'empid');
if(empimg == qualification_id && empid == verification_user_id ) {
//alert(empimg+"empimg");

var oneemp=employimg_obj.document;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/uploads/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

//var oneemp=employimg_obj.document;
j++;
oneemp[j]=employimg_obj.document;
var arr_a=oneemp[0];
var arr_b=oneemp[1];
var arr_c=oneemp[2];
//alert(a+"a data");
/// alert(arr_a+'0');
//alert(arr_b+'1');
//alert(arr_c+'2');

if ( j == 0){
  var one=oneemp[j];
//alert(one+'one');
$('.waiting_imagec').append('<img src="http://staging.eimpressive.com/uploads/'+one+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');


}
if ( j == 1){
  var oneo=oneemp[j];
//alert(oneo+'two');
$('.waiting_imageb').append('<img src="http://staging.eimpressive.com/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 2){
  var oneoo=oneemp[j];
//alert(oneoo+'3');
$('.waiting_imagea').append('<img src="http://staging.eimpressive.com/uploads/'+oneoo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 3){
  var oneooo=oneemp[j];
//alert(oneooo+'4');
$('.waiting_imaged').append('<img src="http://staging.eimpressive.com/uploads/'+oneooo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 4){
  var oner=oneemp[j];
//alert(oner+'5');
$('.waiting_imagee').append('<img src="http://staging.eimpressive.com/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}

if ( j == 5){
  var oner=oneemp[j];
//alert(oner+'6');
$('.waiting_imagef').append('<img src="http://staging.eimpressive.com/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}



}

}


}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert("if addressid");
$('.proof').hide();
/*var liii='<li class="ui-li-has-icon ui-first- ui-first-child">  <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/mobile/location.png" alt="USA" class="ui-li-icon profile t">  <span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="institute_inproo">512 Rd Oage Mill Rd Palo Alto, CA 94304</span></a></li><li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/world.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="city_inproo">'+city_name+'</span></a></li> <li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/state.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="state_inproo">'+state+'</span></a></li>'
$('#lii_new').append(liii);
*/
var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.qualification_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei"> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'
//var liii='<li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/profile.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.First_Name+''+user_obja.Last_Name+'</p></li><li class="li_hei"><div class="li_pri_left"></div> <img src="images/primary/address.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.address+'<br></p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/company.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.institute_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+currentobj_educational_records.pincode+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.city_name+'</p></li><li class="li_hei">  <div class="li_pri_left"></div> <img src="images/primary/state.png" alt="" class="li_img_pri"><p class="li_p_pri">'+user_obja.state+'</p></li>'

$('#lii_newcwwocc').append(liii);

var oneaddress = new Array(10);
j = -1;
for(a=0;a<addressid_records_array.length;a++){
//alert("addressid for");
addressimg_obj = addressid_records_array[a];
// alert(addressimg_obj.document_name);
var oneimg=addressimg_obj.proof_type_id;
var oneid=addressimg_obj.user_id;
//alert(qualification_id+"oneimg");

if(oneimg == qualification_id && oneid == verification_user_id ){
//alert("if address proof");
var oneemp=addressimg_obj.document_name;
//alert(oneemp);
  $('.ssnewinpw').append('<li><a href="http://staging.eimpressive.com/watchguardlive/documents/addressid/'+oneemp+'"><img src="http://staging.eimpressive.com/watchguardlive/documents/addressid/'+oneemp+'" style="height: 100%;width:100%" ></a></li>');

j++;
oneaddress[j]=addressimg_obj.document_name;

one=oneaddress[0];
onea=oneaddress[1];
oneb=oneaddress[2];
onec=oneaddress[3];
oned=oneaddress[4];
onee=oneaddress[5];



if ( j == 0){
  var one=oneaddress[j];
//alert(one+'oneiiiiiiiiiiiiiiiiiiiiiiiiiii');
$('.waiting_imagec').append('<img src="http://staging.eimpressive.com/documents/addressid/'+one+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');
}



if ( j == 1){
  var oneo=oneaddress[j];
//alert(oneo+'two');
$('.waiting_imagea').append('<img src="http://staging.eimpressive.com/documents/addressid/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}

if ( j == 2){
  var oneoo=oneaddress[j];
//alert(oneoo+'3');
$('.waiting_imageb').append('<img src="http://staging.eimpressive.com/documents/addressid/'+oneoo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}

if ( j == 3){
  var oneooo=oneaddress[j];
//alert(oneooo+'4');
$('.waiting_imaged').append('<img src="http://staging.eimpressive.com/documents/addressid/'+oneooo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 4){
  var oner=oneaddress[j];
// alert(oner+'5');
$('.waiting_imagee').append('<img src="http://staging.eimpressive.com/documents/addressid/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}

if ( j == 5){
  var oner=oneaddress[j];
//alert(oner+'6');
$('.waiting_imagef').append('<img src="http://staging.eimpressive.com/documents/addressid/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}



}

}

}

$(document).off('click', '#accept').on('click', '#accept', function() { 


var accept = document.getElementById("waiting_approve").value;
alert(accept);
document.getElementById('waiting_approve').value = "";

$.ajax({url: "http://staging.eimpressive.com/slim-cor/accept_or_reject.php?accept="+accept+"&verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&region="+region,
    data:$('#accept_or_reject').serialize(),
    type: 'post',                   
    async: 'true',
    crossDomain: true,
    dataType: 'json',
    beforeSend: function() {
    },
    complete: function() {
    },
    success: function (result) {
      console.log('searchlpa' +result);
      if(result[0]){
        $("#popupsearchmade").popup("open");
      sessionStorage.setItem("sh_waiting_count",JSON.stringify(result[0]));
       /*   sessionStorage.setItem("sh_inprogress_list_count",JSON.stringify(result[1]));
       sessionStorage.setItem("sh_waiting_count",JSON.stringify(result[2]));
        sessionStorage.setItem("to_approved_sh",JSON.stringify(result[3]));
        sessionStorage.setItem("completed_sh_count",JSON.stringify(result[4]));
        sessionStorage.setItem("sh_reject_list_count",JSON.stringify(result[5]));
        sessionStorage.setItem("sh_verified_false_count",JSON.stringify(result[6]));*/
        //sessionStorage.setItem("insertassign_address_array",JSON.stringify(result[3]));

        $.mobile.loading().hide();
         $.mobile.changePage($('#dashboard_sh'), { transition: "none", changeHash: true, reverse: false });
        //$.mobile.changePage("dashboard",{ transition: "none", changeHash: true, reverse: false }); 
      }else {
      
        //alert('No Data Found for the search record'); 
      }

      return false;
    },
    error: function (request,error) {    
      console.log(request);
      console.log(error);  
      $("#Network").popup("open");         
      alert('Network error has occurred please try again!');
    }
  });

});

$(document).off('click', '#reject').on('click', '#reject', function() { 

alert('hadsjf');
var reject = document.getElementById("waiting_approve").value;
alert(reject);
document.getElementById('waiting_approve').value = "";
$.ajax({url: "http://staging.eimpressive.com/slim-cor/reject_sh.php?reject="+reject+"&verification_user_id="+verification_user_id+"&qualification_id="+qualification_id+"&region="+region,
    data:$('#accept_or_reject').serialize(),
    type: 'post',                   
    async: 'true',
    crossDomain: true,
    dataType: 'json',
    beforeSend: function() {
    },
    complete: function() {
    },
    success: function (result) {
      console.log('searchlpa' +result);
      if(result[0]){
        $("#popupsearchmade").popup("open");
        sessionStorage.setItem("sh_waiting_count",JSON.stringify(result[0]));
        /*sessionStorage.setItem("sh_inprogress_list_count",JSON.stringify(result[1]));
       sessionStorage.setItem("sh_waiting_count",JSON.stringify(result[2]));
        sessionStorage.setItem("to_approved_sh",JSON.stringify(result[3]));
        sessionStorage.setItem("completed_sh_count",JSON.stringify(result[4]));
        sessionStorage.setItem("sh_reject_list_count",JSON.stringify(result[5]));
        sessionStorage.setItem("sh_verified_false_count",JSON.stringify(result[6]));*/
        //sessionStorage.setItem("insertassign_address_array",JSON.stringify(result[3]));

        $.mobile.loading().hide();
            $.mobile.changePage($('#dashboard_sh'), { transition: "none", changeHash: true, reverse: false });
        //$.mobile.changePage("dashboard",{ transition: "none", changeHash: true, reverse: false }); 
      }else {
   
        //alert('No Data Found for the search record'); 
      }

      return false;
    },
    error: function (request,error) {    
      console.log(request);
      console.log(error);  
      $("#Network").popup("open");         
      alert('Network error has occurred please try again!');
    }
  });

});

});