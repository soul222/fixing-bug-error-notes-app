# Notes API Documentation

API untuk menyimpan catatan publik secara online. Digunakan untuk latihan kelas Dicoding Academy.

## Endpoint

Base URL: `https://notes-api.dicoding.dev/v2`

---

## Notes

### 1. Create Note

**URL:** `/notes`  
**Method:** `POST`

#### Request Body

- `title` (string)
- `body` (string)

#### Response

```json
{
  "status": "success",
  "message": "Note created",
  "data": {
    "id": "notes-_O6A6TJcCYUWO7t4",
    "title": "Hello, Notes!",
    "body": "My new notes.",
    "archived": false,
    "createdAt": "2022-07-28T10:12:12.396Z"
  }
}
```

---

### 2. Get Notes (Non-archived)

**URL:** `/notes`  
**Method:** `GET`

#### Response

```json
{
  "status": "success",
  "message": "Notes retrieved",
  "data": [
    {
      "id": "notes-jT-jjsyz61J8XKiI",
      "title": "Welcome to Notes, Dimas!",
      "body": "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
      "createdAt": "2022-07-28T10:03:12.594Z",
      "archived": false
    }
  ]
}
```

---

### 3. Get Archived Notes

**URL:** `/notes/archived`  
**Method:** `GET`

#### Response

```json
{
  "status": "success",
  "message": "Notes retrieved",
  "data": [
    {
      "id": "notes-jT-jjsyz61J8XKiI",
      "title": "Welcome to Notes, Dimas!",
      "body": "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
      "createdAt": "2022-07-28T10:03:12.594Z",
      "archived": true
    }
  ]
}
```

---

### 4. Get Single Note

**URL:** `/notes/{note_id}`  
**Method:** `GET`

#### Response

```json
{
  "status": "success",
  "message": "Note retrieved",
  "data": {
    "id": "notes-jT-jjsyz61J8XKiI",
    "title": "Welcome to Notes, Dimas!",
    "body": "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
    "createdAt": "2022-07-28T10:03:12.594Z",
    "archived": false
  }
}
```

---

### 5. Archive Note

**URL:** `/notes/{note_id}/archive`  
**Method:** `POST`

#### Response

```json
{
  "status": "success",
  "message": "Note archived"
}
```

---

### 6. Unarchive Note

**URL:** `/notes/{note_id}/unarchive`  
**Method:** `POST`

#### Response

```json
{
  "status": "success",
  "message": "Note unarchived"
}
```

---

### 7. Delete Note

**URL:** `/notes/{note_id}`  
**Method:** `DELETE`

#### Response

```json
{
  "status": "success",
  "message": "Note deleted"
}
```

---

**End of Documentation**
