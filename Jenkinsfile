pipeline {
	agent any
  tools {
    nodejs 'NodeJS'
  }

	stages {
		stage('Checkout GitHub'){
			steps {
        git branch: 'main', credentialsId: 'node-docker-jenkins', url: 'https://github.com/felipe300/node-jnk-docker.git'
			}
		}		
		stage('Install node dependencies'){
			steps {
        sh 'npm install'
			}
		}
		stage('Test Code'){
			steps {
        sh 'npm test'
			}
		}
    stage('Docker Build'){
			steps {
        script {
          docker.build("node-docker-jenkins:lts")
        }
			}
		}
	}

	post {
		success {
			echo 'Build&Deploy completed successfully!'
		}
		failure {
			echo 'Build&Deploy failed. Check logs.'
		}
	}
}
