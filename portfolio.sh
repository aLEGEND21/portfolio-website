# This should only be run directly and located one directory above the project
echo y | docker image prune
rm -rf portfolio-website
git clone https://github.com/aLEGEND21/portfolio-website.git
cd portfolio-website
sudo docker build -t portfolio-website .
sudo docker rm -f portfolio-website
sudo docker run -d --name portfolio-website -p 3001:3001 --network=nginx-proxy portfolio-website