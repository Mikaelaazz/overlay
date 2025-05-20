<?php
// save_postgame.php
 
// Enable CORS (Cross-Origin Resource Sharing)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight requests for CORS
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
    exit();
}

// Get the raw POST data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if ($data === null) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON data']);
    exit();
}

// Path to your postgame.json file
$filePath = 'database/postgame.json';

// Ensure the directory exists
if (!file_exists('database')) {
    if (!mkdir('database', 0755, true)) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to create directory']);
        exit();
    }
}

// Save the data to the file
try {
    $result = file_put_contents($filePath, json_encode($data, JSON_PRETTY_PRINT));
    
    if ($result === false) {
        throw new Exception('Failed to write to file');
    }
    
    // Verify the file was written successfully
    if (!file_exists($filePath) || filesize($filePath) === 0) {
        throw new Exception('File write verification failed');
    }
    
    echo json_encode(['success' => true, 'message' => 'Data saved successfully']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
