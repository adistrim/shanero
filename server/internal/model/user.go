package models

import (
	"time"

	"github.com/google/uuid"
	"github.com/uptrace/bun"
)

type User struct {
	bun.BaseModel `bun:"table:users"`

	ID uuid.UUID `bun:",pk,type:uuid,default:uuid_generate_v4()"`

	// Auth
	OAuthID           string `bun:",unique,nullzero"` // nullable if using email/password
	Email             string `bun:",unique,notnull"`
	PasswordHash      string `bun:",nullzero"` // nullable if OAuth
	EmailVerified     bool   `bun:",default:false,notnull"`
	VerificationToken string `bun:",nullzero"`

	// User info
	Username  string `bun:",unique,notnull"`
	Name      string `bun:",notnull"`
	AvatarURL string `bun:",nullzero"`
	Bio       string `bun:",nullzero"`

	UserType string `bun:",default:'regular',notnull"` // regular, creator, admin

	// Credits system
	CreditsAvailable  int       `bun:",default:0,notnull"`
	DailyCreditLimit  int       `bun:",default:60,notnull"`
	LastCreditResetAt time.Time `bun:",nullzero"`

	Suspended bool `bun:",default:false,notnull"`

	// Misc
	CurrencyCode string    `bun:",default:'INR',notnull"`
	CreatedAt    time.Time `bun:",nullzero,default:current_timestamp"`
	UpdatedAt    time.Time `bun:",nullzero,default:current_timestamp"`
}
