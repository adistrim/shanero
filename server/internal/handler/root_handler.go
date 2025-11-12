package handler

import (
	"net/http"
	
	"github.com/gin-gonic/gin"
)

func Root(c *gin.Context) {
	c.String(http.StatusOK, "Shanero API!")
}

