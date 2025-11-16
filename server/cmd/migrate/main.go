package main

import (
	"server/database"
)

func main() {
	db := database.Connect()
	defer db.Close()

	database.Migrate(db)
}
