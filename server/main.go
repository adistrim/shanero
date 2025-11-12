package main

import (
	"server/config"
	"server/internal/routes"
)

func main() {
	config.LoadConfig()
	
	router := routes.Index()
	
	router.Run(":" + config.ENV.Port)
}
