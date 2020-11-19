docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker build $PSScriptRoot -t crazyyoshi/dut-mmi:latest
docker run -d -p 80:80 -p 81:81 -p 82:82 crazyyoshi/dut-mmi:latest