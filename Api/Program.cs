using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System.Data.SQLite; 

using Api.Database; 
namespace api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string cs = @"URI=file:C:\source\repos\cgi-ajmerker\api\sessions0.db";
        

            using var con = new SQLiteConnection(cs);
            con.Open();

            string stm = "select SQLITE_VERSION()";

            using var cmd = new SQLiteCommand(stm, con);
            string version = cmd.ExecuteScalar().ToString();

            //ISeedData saveObj = new SaveData();
            //saveObj.SeedData();


            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
