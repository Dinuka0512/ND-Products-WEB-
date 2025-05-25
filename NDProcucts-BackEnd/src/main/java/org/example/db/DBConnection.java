package org.example.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
    private static DBConnection dbConnection;
    private Connection connection;

    private String userName = "root";
    private String password = "0512";
    private String url = "jdbc:mysql://localhost:3306/NDProducts";
    private DBConnection() throws SQLException, ClassNotFoundException {
        Class.forName("com.mysql.jdbc.Driver");
        connection = DriverManager.getConnection(url, userName, password);
    }

    public static DBConnection getInstance() throws SQLException, ClassNotFoundException {
        if(dbConnection != null){
           dbConnection = new DBConnection();
        }
        return dbConnection;
    }

    public Connection getConnection(){
        return connection;
    }
}