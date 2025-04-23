pipeline {
    agent any

    tools {
        maven 'M3'
        jdk 'jdk17'
    }

    environment {
        DOCKER_IMAGE_VERSION = '1.0.0'
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
        MAVEN_HOME = tool name: 'M3', type: 'maven'
        JAVA_HOME = tool name: 'jdk17', type: 'jdk'
        PATH = "${MAVEN_HOME}/bin:${JAVA_HOME}/bin:${env.PATH}"

        SONAR_HOST_URL = 'http://localhost:9000'
        SONAR_TOKEN = 'squ_e8b5f30571241cb357ad5734ed99e18e1807aa81'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
            stage('Build Maven Project') {
            steps {
                dir('product-service') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Upload Artifact to Nexus') {
            steps {
                script {
                    def version = "1.0-SNAPSHOT"
                    def projectName = "product-service"

                    dir('product-service') {
                        nexusArtifactUploader(
                            nexusVersion: 'nexus3',
                            protocol: 'http',
                            nexusUrl: 'http://localhost:8081',
                            groupId: 'org.pfe',
                            version: version,
                            repository: 'maven-snapshots',
                            credentialsId: 'nexus-credentials',
                            artifacts: [
                                [
                                    artifactId: projectName,
                                    classifier: '',
                                    file: "target/${projectName}-${version}.jar",
                                    type: 'jar'
                                ]
                            ]
                        )
                    }
                }
            }
        }
    }
}
