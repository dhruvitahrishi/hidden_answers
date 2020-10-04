<!DOCTYPE html>
<html>
<head>
	<title>Verification</title>
	<style type="text/css">
		h1{
	background-color: black;
	font-size: 28px;
  padding: 20px;
  color: white;
  float: center;
  align:center;
}
button {
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 500px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
body{
	background: linear-gradient(rgba(0,0,50,0.5),rgba(0,0,50,0.5)),url("images/best.jpg");
	background-size: cover;
}
	</style>
</head>
<body>
	<h1 >Hidden Answers</h1><br><br>
	<center>
	<button onclick="openPopup();" ><a href="index.php">START EXAM</a></button>
	</center>

<script>
    var popup;

	function openPopup(){
    popup = window.open("./index.php","Tab_NAME_HERE", "height=900,width=1500");
	}

	function closePopup(){
    popup.close();
	}
</script>






</body>
</html>