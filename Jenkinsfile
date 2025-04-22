def getTimeStamp() {
    def date = new Date()
    return date.format('yyyyMMddHHmmss')
}

pipeline {
    agent any

    tools {
        maven 'Maven'
        jdk 'JDK17'
    }

    environment {
        DOCKER_IMAGE_VERSION = '1.0.0'
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {

        stage('Build Docker Images') {
            steps {
                script {
                    def services = [
                        "discovery-service", "gateway-service", "product-service",
                        "formation-service", "order-service", "notification-service",
                        "login-service", "contact-service"
                    ]
                    services.each { serviceName ->
                        dir(serviceName) {
                            echo "Building Docker image for ${serviceName} at ${getTimeStamp()}"
                            try {
                                sh "docker build -t ${serviceName}:${DOCKER_IMAGE_VERSION} ."
                            } catch (Exception e) {
                                error "Failed to build Docker image for ${serviceName}. Error: ${e.getMessage()}"
                            }
                        }
                    }
                }
            }
        }

        stage('Deploy Microservices') {
            steps {
                script {
                    echo "Stopping and removing containers for ${getTimeStamp()}"
                    sh "docker-compose -f ${DOCKER_COMPOSE_FILE} down --volumes --remove-orphans"
                    echo "Starting the microservices at ${getTimeStamp()}"
                    sh "docker-compose -f ${DOCKER_COMPOSE_FILE} up -d"
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline completed at ${getTimeStamp()}"
        }
        success {
            echo "Deployment completed successfully!"
        }
        failure {
            echo "There was an error in the pipeline!"
        }
    }
}
