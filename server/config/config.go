package config

import (
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/joho/godotenv"
)

type Config struct {
	Port string
	AllowedOrigins []string
	DatabaseURL string
	JWTSecret string
}

var ENV *Config

func init() {
	var err error
	ENV, err = LoadConfig()
	if err != nil {
		log.Fatalf("Error: Failed to load configuration. %v", err)
	}
}

func LoadConfig() (*Config, error) {
	godotenv.Load()
	
	port := os.Getenv("PORT")
	if port == "" {
		log.Println("No PORT environment variable found, using default port 8080")
		port = "8080"
	}
	allowedOriginsEnv := os.Getenv("ALLOWED_ORIGINS")
	var allowedOrigins []string
	if allowedOriginsEnv == "" {
			log.Println("Please make sure to put the allowed origins, going with default: localhost:3000")
			allowedOrigins = []string{"http://localhost:3000"}
	} else {
			allowedOrigins = strings.Split(allowedOriginsEnv, ",")
	}
	databaseURL := os.Getenv("DATABASE_URL")
	if databaseURL == "" {
		return nil, fmt.Errorf("DATABASE_URL environment variable is not set")
	}

	jwtSecret := os.Getenv("JWT_SECRET")
	if jwtSecret == "" {
		return nil, fmt.Errorf("JWT_SECRET environment variable not set")
	}
	
	return &Config{
		Port: port,
		AllowedOrigins: allowedOrigins,
		DatabaseURL: databaseURL,
		JWTSecret: jwtSecret,
	}, nil
}

