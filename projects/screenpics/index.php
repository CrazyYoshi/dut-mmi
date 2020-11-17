<!DOCTYPE html>

<html lang="fr">
<head>
    <meta charset="utf-8">

    <title>MAAMAR Miloud</title>
    <link rel="stylesheet" href="./CSS/main.css" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Gloria+Hallelujah' rel='stylesheet' type='text/css'>
    <script src="./JS/jquery.js" type="text/javascript">
</script>
    <script src="./JS/jquery-ui.js" type="text/javascript">
</script>
    <script src="./JS/main.js" type="text/javascript">
</script>
    <script src="./JS/ajaxTags.js" type="text/javascript">
</script>
</head><?php 
function getTheTaglist($taglist){
    $db = mysqli_connect('localhost', 'root', '', 'screenpics');
    $req = "SELECT `$taglist` FROM `ScreenPics_tags`";
    $query = mysqli_query($db,$req);
    echo "<ul id='LIST$taglist'>";
    while($results = mysqli_fetch_assoc($query)){
    if($results[$taglist]!=null && $results[$taglist]!="0000"){
        $i = rand(1,5);
        echo "<li><a  class=\"tag$i\" href=\"javaScript:void(0);\">".$results[$taglist]."</a></li>";
        }
    }
    echo "</ul>";
    mysqli_close($db);

}

?>

<body>
    <div class="imgVisu">
        <div class="imgDesc">
            <h3 id='descName'></h3><br>
            <br>
            <br>

            <h5>Auteur :</h5>

            <h5 id='descAuthor'></h5><br>
            <br>

            <h5>Artiste :</h5>

            <h5 id='descArtist'></h5><br>
            <br>

            <h5>Année :</h5>

            <h5 id='descYear'></h5><br>
            <br>

            <h5>Genres :</h5><br>

            <h5 id='descGenre'></h5><br>
            <br>

            <h6>Cliquez n'importe où pour retourner à la galerie.</h6>
        </div>

        <div class="imgDisp"></div>
    </div>

    <div id="main">
        <div id="wrap">
            <!--Header Menu TagBar -->

            <div id="header">
                <div id="hmIcon">
                    <div id="led"></div>
                </div>
            </div>

            <div id="menu">
                <ul>
                    <li id="genre">Genre</li>

                    <li id="author">Auteur</li>

                    <li id="name">Manga</li>

                    <li id="artist">Dessinateur</li>

                    <li id="year">Année</li>
                </ul>
            </div>

            <ul id="tagsBar">
                <li id="BTag1" class="tagContainer">
                    <div id="" class="tagDeco"></div>

                    <div class="delTag">
                        Retirer le Tag
                    </div>
                </li>

                <li id="BTag2" class="tagContainer">
                    <div id="" class="tagDeco"></div>

                    <div class="delTag">
                        Retirer le Tag
                    </div>
                </li>

                <li id="BTag3" class="tagContainer">
                    <div id="" class="tagDeco"></div>

                    <div class="delTag">
                        Retirer le Tag
                    </div>
                </li>

                <li id="BTag4" class="tagContainer">
                    <div id="" class="tagDeco"></div>

                    <div class="delTag">
                        Retirer le Tag
                    </div>
                </li>

                <li id="BTag5" class="tagContainer">
                    <div id="" class="tagDeco"></div>

                    <div class="delTag">
                        Retirer le Tag
                    </div>
                </li>
            </ul>
        </div>

        <div class='cloudsWord'>
            <div class="tags" id="Bgenre">
                <?php getTheTaglist("genre"); ?>
            </div>

            <div class="tags" id="Bauthor">
                <?php getTheTaglist("author"); ?>
            </div>

            <div class="tags" id="Bartist">
                <?php getTheTaglist("artist"); ?>
            </div>

            <div class="tags" id="Bname">
                <?php getTheTaglist("name"); ?>
            </div>

            <div class="tags" id="Byear">
                <?php getTheTaglist("year"); ?>
            </div>
        </div>

        <div id="wrap">
            <div class="Img-Content" id="img-Content-Parent"></div>

            <div id="previousNext">
                <div class="buttonPN" id="previous">
                    Précédent
                </div>

                <div class="buttonPN" id="next">
                    Suivant
                </div>
            </div>

            <div id="footer"></div>
        </div>
    </div>
</body>
</html>
