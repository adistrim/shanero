package routes

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"server/config"
	"server/internal/handler"
)

func Index() *gin.Engine {
	router := gin.Default()
	
	router.Use(cors.New(cors.Config{
		AllowOrigins:     config.ENV.AllowedOrigins,
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))
	
	router.GET("/health", handler.HealthCheck)
	router.GET("/", handler.Root)
	
	return router
}
