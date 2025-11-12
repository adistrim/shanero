package service

type HealthService struct{}

func (hs *HealthService) Check() string {
	return "OK"
}
