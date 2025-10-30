class DatabaseService{
    connect() {
        throw new Error("Method connect() must be implemented");
    }
    getUserData(userId) {
        throw new Error("Method getUserData() must be implemented");
    }
}

class MySQLDatabaseService extends DatabaseService{
    connect() {
        console.log("Connected to MySQL Database ");
    }

    getUserData(userId){
        console.log('Fetch data for user ID ${userId} from MySQL Database.');
        return { id:userId, name: "Alice (MySQL)"};
    }
}

class SQLServerDatabaseService extends DatabaseService {
    connect() {
        console.log("Connected to SQL Server Database ");
    }

    getUserData(userId){
        console.log('Fetch data for user ID ${userId} from SQL Server Database.');
        return { id:userId, name: "Bob (SQL Server)"};
    }

    closeSQLSeverConnection(){
        console.log("Colosed SQL Server Database connection");
    }
}

class PostgreSqlDatabaseService extends DatabaseService {
  connect() {
    console.log("Connected to PostgreSQL Database");
  }

  getUserData(userId) {
    console.log(`Fetched data for user id ${userId} from PostgreSQL Database.`);
    return { id: userId, name: "Charlie (PostgreSQL)" };
  }

  rollbackTransaction() {
    console.log("Rolled back PostgreSQL transaction");
  }
}

class UserManager {
  constructor(databaseService) {
    this.databaseService = databaseService; // Hardcoded dependency
  }

  getUser(userId) {
    // Assuming we're working with MySQL here
    this.databaseService.connect();
    const user = this.databaseService.getUserData(userId);
    console.log(`User Details:`, user);
    return user;
  }
}

// Usage Example
const mysqlDatabaseService = new MySQLDatabaseService();
const sqlserverDatabaseService = new SQLServerDatabaseService();
const userManager = new UserManager(sqlserverDatabaseService);
userManager.getUser(1);
    