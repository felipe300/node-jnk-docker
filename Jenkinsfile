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
    stage('Build Docker Image'){
			steps {
        script {
          // dockerImage = docker.build("${DOCKER_HUB_REPO}:latest")
          docker.build("node-docker-jenkins")
        }
			}
		}
		//   stage('Trivy Scan'){
		// 	steps {
		//       sh 'trivy ${DOCKER_HUB_REPO}:latest'
		// 	}
		// }
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
