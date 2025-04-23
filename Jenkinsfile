pipeline {
    agent any

    tools {
        maven 'Maven'
        jdk 'JDK17'
    }

   environment {
    DOCKER_IMAGE_VERSION = '1.0.0'
    DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    MAVEN_HOME = tool name: 'Maven', type: 'Maven'
    JAVA_HOME = tool name: 'JDK17', type: 'JDK'
    PATH = "${MAVEN_HOME}/bin:${JAVA_HOME}/bin:${env.PATH}"
}


    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

   
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
                            bat "docker build -t ${serviceName}:${DOCKER_IMAGE_VERSION} ."
                        }
                    }
                }
            }
        }

        stage('Deploy Microservices') {
            steps {
                script {
                    bat "docker compose -f ${DOCKER_COMPOSE_FILE} down"
                    bat "docker compose -f ${DOCKER_COMPOSE_FILE} up -d"
                }
            }
        }
    }
}
