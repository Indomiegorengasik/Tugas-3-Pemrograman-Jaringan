package main

import (
	"backend/config"
	"backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	// Initialize the database
	config.ConnectDB()

	// Define the routes
	routes.BookRoutes(r)

	// Start the server
	r.Run(":8080") // Server running on http://localhost:8080
}
