docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker build $PSScriptRoot  -t dut-mmi:latest
docker run -d -p 80:80 -p 81:81 -p 82:82 dut-mmi:latest