package utils

import (
	"encoding/json"
	"net/http"
)

// Response adalah struktur data untuk respons API
type Response struct {
	Status  bool        `json:"status"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"`
}

// SendResponse mengirimkan respons standar dalam format JSON
func SendResponse(w http.ResponseWriter, status bool, message string, data interface{}, statusCode int) {
	// Set header respons ke application/json
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)

	// Membuat respons dalam bentuk struct Response
	response := Response{
		Status:  status,
		Message: message,
		Data:    data,
	}

	// Encode struct Response ke format JSON dan kirimkan ke client
	json.NewEncoder(w).Encode(response)
}

// SendError mengirimkan respons error dengan format standar
func SendError(w http.ResponseWriter, message string, statusCode int) {
	SendResponse(w, false, message, nil, statusCode)
}

// SendSuccess mengirimkan respons sukses dengan format standar
func SendSuccess(w http.ResponseWriter, message string, data interface{}, statusCode int) {
	SendResponse(w, true, message, data, statusCode)
}
