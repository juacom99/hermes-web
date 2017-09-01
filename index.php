<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href="https://fonts.googleapis.com/css?family=Romanesco" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=GFS+Didot" rel="stylesheet">
        <style>
		
			html
			{
				height: calc(100% - 175px);
			}
			
            body
            {
                background-color: #c3c3c3;
                margin: 0px;
				height:100%;
            }
			
			#wapper
			{
				width: 80%;
				height: 100%;
				margin-left: 10%;
			}
			
			#logo
			{
				font-family: 'GFS+Didot', serif;
				font-size: 80px;
				color:#464646;
				text-align: center;
			}
			
			#logo:before 
			{
				content: url(logo.png);
				top: 16px;
				position: relative;
			}
			#logo:after 
			{
				content: url(logo.png);
				top: 16px;
				position: relative;
				
			}
            img
            {
                display: block;
                margin: 0 auto
            }
			
			#menu
			{
				background-color: #464646;
				width: 100%;
			}

            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
                    padding-left: 90px;
            }

            li {
                float: left;
                border-right: 1px solid #c3c3c3;
            }

            li a {
                display: block;
                color: white;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }

            li:last-child {
                border-right: none;
            }
			
			li:first-child {
                border-left:  1px solid #c3c3c3;
            }


            li a:hover:not(.active) {
                background-color: #111;
            }

            .active {
                background-color: #4CAF50;
            }
			
			#content
			{
				height: 100%;
				background-color: #f1f1f1;
			}

        </style>		
	</head>
    <body>
		<div id="wapper">
			<div id="logo"><!--<img src="logo.png"/>-->Hermes Client</div>
			<div id="menu">
				<ul id="navi">
					<li><a href="#main" class="active">Main</a></li>
					<li><a href="#screenshots">Screershots</a></li>
					<li><a href="#archive">Archive</a></li>
					<li style="float:right"><a class="active" href="#about">About</a></li>
				</ul>
			</div>
			<div id="content">
				<div > Page under construction</div>
			</div>
		</div>
    </body>
</html>
