<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Appointment</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<link rel="stylesheet" href="Views/style.css">
<script src="jquery-3.2.1.min.js"></script>
<script src="main.js"></script>
</head>
<body>
<div class="container">
<div class="row">
<div class="col-8">
<h1 class="m-3">Appointment</h1>
<form id="formAppointment">
<!-- NAME -->
<div class="input-group input-group-sm mb-3">

<div class="input-group-prepend">
<span class="input-group-text" id="ID">ID: </span>
</div>
<input type="number" id="id" name="id">
</div>

<div class="input-group input-group-sm mb-3">
<div class="input-group-prepend">
<span class="input-group-text" id="Name">Name: </span>
</div>    
<input type="text" id="name" name="name">
</div>

<div class="input-group input-group-sm mb-3">
<div class="input-group-prepend">
<span class="input-group-text" id="DocId">DocId: </span>
</div>
<input type="number" id="docid" name="docId">
</div>
<div class="input-group input-group-sm mb-3">
<div class="input-group-prepend">
<span class="input-group-text" id="Date">Date: </span>
</div>
<input type="text" id="date" name="date">
</div>
<div class="input-group input-group-sm mb-3">
<div class="input-group-prepend">
<span class="input-group-text" id="Time">Time: </span>
</div>
<input type="text" id="time" name="time">
</div>
<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<input type="button" id="btnSave" value="Save" class="btn btn-primary">
</form>
</div>
</div>

<br>
<h2>Appointments</h2>
<div class="row">
<ul id="appointment" class="row" ></ul>
</div>
<div class="row">
<div class="col-12" id="appoin">
</div>
</div>
</div>

</body>
</html>
