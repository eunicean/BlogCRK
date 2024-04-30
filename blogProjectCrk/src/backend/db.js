import conn from './conn.js'

export async function getAllGeneralContent() {
    const [rows] = await conn.query('SELECT * FROM general_content')
    return rows
}

export async function createGeneralContent(title, content, theme) {
    const result = await conn.query('INSERT INTO general_content (title, content, theme) VALUES (?, ?, ?)', [title, content, theme]);
    return result.affectedRows === 1;
}

export async function getGeneralContentById(contentId) {
    const [rows] = await conn.query('SELECT * FROM general_content WHERE id = ?', [contentId]);
    return rows.length ? rows[0] : null;
}

export async function deleteGeneralContent(contentId) {
    try {
        const [result] = await conn.query('DELETE FROM general_content WHERE id = ?', [contentId]);
        if (result.affectedRows === 1) {
            console.log(`El contenido con ID ${contentId} fue eliminado exitosamente.`);
            return true;
        } else {
            console.error(`No se encontró ningún contenido con el ID ${contentId} para eliminar.`);
            return false;
        }
    } catch (error) {
        console.error('Error al intentar eliminar el contenido:', error);
        return false;
    }
}

export async function updateGeneralContent(contentId, title, content, theme) {
    try {
        const [result] = await conn.query('UPDATE general_content SET title = ?, content = ?, theme = ? WHERE id = ?', [title, content, theme, contentId]);
        if (result.affectedRows === 1) {
            console.log(`La información del contenido con ID ${contentId} fue actualizada exitosamente.`);
            return true;
        } else {
            console.error(`No se encontró ningún contenido con el ID ${contentId} para actualizar.`);
            return false;
        }
    } catch (error) {
        console.error('Error al intentar actualizar la información del contenido:', error);
        return null;
    }
}

//users
// Función para obtener todos los usuarios
export async function getAllUsers() {
    try{
        const [rows] = await conn.query('SELECT * FROM users');
        return rows;
    }catch (error) {
        console.error('Error al intentar obtener la información de usuarios:', error);
        return null;
    }
}

export async function createUser(username, email, userpassword) {
    try {
        const result = await conn.query('INSERT INTO users (username, email, userpassword) VALUES (?, ?, ?)', [username, email, userpassword]);
        return result;
    } catch (error) {
        console.error('Error al intentar registrar un nuevo usuario:', error);
        return false;
    }
}

// Función para buscar un usuario por su email y contraseña
export async function getUserByEmailAndPassword(email, userpassword) {
    const [rows] = await conn.query('SELECT * FROM users WHERE email = ? AND userpassword = ?', [email, userpassword]);
    return rows[0];
}
