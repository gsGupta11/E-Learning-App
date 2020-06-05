import 'package:e_learning/pages/sign_up.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import './pages/login.dart';


void main() {
  runApp(MaterialApp(
    debugShowCheckedModeBanner: false,
    routes: {
      "/":(context)=>LoginScreen(),
      "/signup":(context)=>Signup(),
    },
  ));
}
