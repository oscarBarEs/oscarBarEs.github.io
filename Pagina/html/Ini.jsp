<%@page contentType="text/html charset=UTF-8" import="java.util.List, p2.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>&nbsp;</title>
</head>
<body>
<%
	String oscar = "https://disco.uv.es/cgi-bin/in-public?fileman:es:imgdump:pub:/disco/Imagenes/oscar.png:osbares:" ;
%>
<div></div>
<h1> Hi! This is Oscar</h1>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus scelerisque metus, sit amet viverra nulla mollis eget. Ut laoreet mattis quam, ac varius est blandit et. Nam mollis nisi nec ex dignissim facilisis. Proin cursus suscipit cursus. Sed justo turpis, efficitur ac varius quis, maximus id velit. Vivamus pulvinar urna in malesuada fermentum. Vivamus in condimentum urna. Morbi sagittis mattis massa, in lobortis erat accumsan a. Sed urna neque, facilisis nec placerat efficitur, efficitur ut mauris. Aenean metus arcu, porttitor quis nibh et, dictum egestas urna. Nunc felis lorem, scelerisque at ante sed, tincidunt porttitor augue. Proin ut nunc gravida, sollicitudin orci non, ultrices velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur nec viverra est. Proin luctus quis erat a accumsan.</p>
    <hr>
    <div id="demo" class="carousel slide" data-ride="carousel">

        <!-- Indicators -->
        <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        
        <!-- The slideshow -->
        <div class="carousel-inner">
            <div class="carousel-item active">
            
                <img src="<%=oscar%>" alt="Los Angeles" width="100%" height="500">
            </div>
            <div class="carousel-item">
            <video alt="Chicago" width="100%" height="500"> 
                <source src="https://disco.uv.es/disco/osbares/disco/videos/cubo.avi" controls>
                Your browser does not support avi
            </video>    
            </div>
            <div class="carousel-item">
            <img src="https://disco.uv.es/disco/osbares/disco/Imagenes/oscar.png" alt="New York" width="100%" height="500">
            </div>
        </div>
        
        <!-- Left and right controls -->
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
</body>

</html>