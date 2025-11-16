package database

import (
	"context"
	"log"

	"server/internal/model"
	"github.com/uptrace/bun"
)

func Migrate(db *bun.DB) {
	ctx := context.Background()
	
	// ensuring uuid-ossp extension exists
	_, err := db.ExecContext(ctx, `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
	if err != nil {
		log.Fatalf("failed to enable uuid-ossp extension: %v", err)
	}

	modelsToMigrate := []any{
		(*model.User)(nil),
	}

	for _, m := range modelsToMigrate {
		_, err := db.NewCreateTable().Model(m).IfNotExists().Exec(ctx)
		if err != nil {
			log.Fatalf("migration failed: %v", err)
		}
	}

	log.Println("Database migrations completed.")
}
