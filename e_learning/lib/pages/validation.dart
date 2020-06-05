class Validation{
  String validatePassword(String value){
    if (value.length<4){
      return 'Password Must be atleast 4 Character';
    }
    return null;
  }
  String validateEmail(String value){
    if(!value.contains('@')){
      return 'Email Not Valid';
    }
    return null;
  }

  String validateName(String value){
    if(value.isEmpty){
      return 'Field Cannot be Empty';
    }
    return null;
  }
}