<?php
function echoBlocs($img){
	shuffle($img);
	$content=1;
	$imgContent="";
	for($i=1;$i<=count($img);$i++){
		$url="url(.".$img[$i-1]['src'].")";
		$style=" style=\"background-image:$url;background-position:center center;background-size:cover;\"";
		$imgContent=$imgContent."<div class=\"img\" $style><div class=\"info\">".$img[$i-1]['name']."</div><div class=\"hiddenInfo\"><div id=\"Aname\">".$img[$i-1]['name']."</div><div id=\"author\">".$img[$i-1]['author']."</div><div id=\"artist\">".$img[$i-1]['artist']."</div><div id=\"year\">".$img[$i-1]['year']."</div><div id=\"genre\">".$img[$i-1]['genre']."</div></div></div>";
	}
	echo $imgContent;
}

if(isset($_POST['tags'])){
	$tag=json_decode($_POST['tags'], true);
	$requete="";
	if($tag==null){
		$requete = "SELECT * FROM `ScreenPics_img`";
	}
	else{
		$numb=count($tag);
		$requete="";
		for($s=0;$s<$numb;$s++){
			if($s==0){
				$requete="SELECT * FROM `ScreenPics_img` WHERE `".$tag[$s][1]."` LIKE '%".$tag[$s][0]."%'";
			}
			else{
				$requete=$requete." AND `".$tag[$s][1]."` LIKE '%".$tag[$s][0]."%'";
			}

		}
	}

    $db = mysqli_connect('localhost', 'root', '', 'screenpics');
	$request = mysqli_query($db,$requete);
	mysqli_close($db);

	$numbRows=mysqli_num_rows($request);
	$i=0;
	$img=array();

	while($results = mysqli_fetch_assoc($request)){
		$img[$i]=array();
		$img[$i]['name']=$results["name"];
		$img[$i]['src']=$results["src"];
		$img[$i]['author']=$results["author"];
		$img[$i]['artist']=$results["artist"];
		$img[$i]['year']=$results["year"];
		$img[$i]['genre']=$results["genre"];
		$i++;
	}
	echoBlocs($img);


}
?>
