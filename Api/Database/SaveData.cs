using System; 
using System.Data.SQLite; 
namespace Api.Database
{
    public class SaveData : ISeedData
    {
        public void SeedData()
        {
            string cs = @"URI=file:C:\source\repos\cgi-ajmerker\api\sessions0.db";
            using var con = new SQLiteConnection(cs);
            con.Open();

            using var cmd = new SQLiteCommand(con);

            cmd.CommandText = "DROP TABLE IF EXISTS sessions";
            cmd.ExecuteNonQuery();

            cmd.CommandText = @"CREATE TABLE sessions(Id INTEGER PRIMARY KEY, Name TEXT, Category TEXT, StartTime DATETIME, StopTime DATETIME, TotalTime DOUBLE)"; 
            cmd.ExecuteNonQuery(); 

            //Starter Session One 
            cmd.CommandText = @"INSERT INTO sessions(Id, Name, Category, StartTime, StopTime, TotalTime) 
            VALUES (@Id, @Name, @Category, @StartTime, @StopTime, @TotalTime)"; 
            cmd.Parameters.AddWithValue("@Id", 1);
            cmd.Parameters.AddWithValue("@Name", "Abbie Merker"); 
            cmd.Parameters.AddWithValue("@Category", "MIS 321");
            cmd.Parameters.AddWithValue("@StartTime", DateTime.Now); 
            cmd.Parameters.AddWithValue("@StopTime", DateTime.Now); 
            cmd.Parameters.AddWithValue("@TotalTime", 1); 

            cmd.Prepare();
            cmd.ExecuteNonQuery(); 


            //Starter Session Two
            cmd.CommandText = @"INSERT INTO sessions(Id, Name, Category, StartTime, StopTime, TotalTime) 
            VALUES (@Id, @Name, @Category, @StartTime, @StopTime, @TotalTime)"; 
            cmd.Parameters.AddWithValue("@Id", 2);
            cmd.Parameters.AddWithValue("@Name", "Abbie Merker"); 
            cmd.Parameters.AddWithValue("@Category", "MIS 330");
            cmd.Parameters.AddWithValue("@StartTime", DateTime.Now); 
            cmd.Parameters.AddWithValue("@StopTime", DateTime.Now); 
            cmd.Parameters.AddWithValue("@TotalTime", 2); 

            cmd.Prepare();
            cmd.ExecuteNonQuery(); 

            //Starter Session Two
            cmd.CommandText = @"INSERT INTO sessions(Id, Name, Category, StartTime, StopTime, TotalTime) 
            VALUES (@Id, @Name, @Category, @StartTime, @StopTime, @TotalTime)"; 
            cmd.Parameters.AddWithValue("@Id", 3);
            cmd.Parameters.AddWithValue("@Name", "Abbie Merker"); 
            cmd.Parameters.AddWithValue("@Category", "GBA 330");
            cmd.Parameters.AddWithValue("@StartTime", DateTime.Now); 
            cmd.Parameters.AddWithValue("@StopTime", DateTime.Now);
            cmd.Parameters.AddWithValue("@TotalTime", 3);  

            cmd.Prepare();
            cmd.ExecuteNonQuery(); 


        }
    }
}