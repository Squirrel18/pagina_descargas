<?php
	require_once('data.php');

	class connection_handler {
		private $Data_connection;	
		private $server = "";
		private $user = "";
		private $password = "";
		private $data_base = "";
		private $conexion;
	  
		public function __construct() {	
			$this->Data_connection = new connection_data();
			$this->server = $this->Data_connection->host;
			$this->user = $this->Data_connection->user;
			$this->password = $this->Data_connection->pass;
			$this->data_base = $this->Data_connection->data_base;
		}

		public function open_connection() {  
			$conexion = mysql_connect($this->server, $this->user, $this->password);
			if (!$conexion) {
				die('Could not connect: ' . mysql_error());
			} else {
				$bd_selection = mysql_select_db($this->data_base, $conexion);
				if (!$bd_selection) {
					die('It cannot be used database : ' . mysql_error());
				}
			}
			return $conexion;
		}
	  
		public function close_connection($con) {
			if(mysql_close($con)) {
				//echo "I was disconnected from the database ";
			}
		}	 
	}	

?>
