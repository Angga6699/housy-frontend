def branch = "main"
def rname = "origin"
def dir = "~/housy-frontend/"
def credential = 'cicd'
def server = 'cicd@103.179.56.6'
def img = 'reiya24/housy-frontend'
def cont = 'frontend'

pipeline {
    agent any

    stages {
        stage('Repository Pull') {
            steps {
                sshagent([credential]){
                    sh """ssh -o StrictHostKeyChecking=no ${server} << EOF
                    echo "Pulling Housy Backend Repository"
                    cd ${dir}
                    docker container stop ${cont}
                    docker rm ${cont}
                    git pull ${rname} ${branch}
                    exit
                    EOF"""
                }
            }
        }

        stage('Building Docker Image') {
            steps {
                sshagent([credential]){
                    sh """ssh -o StrictHostKeyChecking=no ${server} << EOF
                    echo "Building Image"
                    cd ${dir}
                    docker build -t ${img}:${env.BUILD_ID} .
                    exit
                    EOF"""
                }
            }
        }

        stage('Image Deployment') {
            steps {
                sshagent([credential]){
                    sh """ssh -o StrictHostKeyChecking=no ${server} << EOF
                    cd ${dir}
                    docker compose -f docker-compose.yml up -d
                    exit
                    EOF"""
                }
            }
        }

        stage('Pushing to Docker Hub (angga6699)') {
            steps {
                sshagent([credential]){
                    sh """ssh -o StrictHostKeyChecking=no ${server} << EOF
                    cd ${dir}
                    docker image push ${img}:latest
                    exit
                    EOF"""
                }
            }
        }
    }
}
