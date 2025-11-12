package handler

import (
	"net/http"
	
	"github.com/gin-gonic/gin"
	"server/internal/service"
)

func HealthCheck(c *gin.Context) {
	healthService := &service.HealthService{}
	c.String(http.StatusOK, healthService.Check())
}
