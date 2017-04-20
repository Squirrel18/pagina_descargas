<?php
	require ('Connection.php');

	class Consult{

		private $sql = "";
		private $id_desing = "";
		private $resultado = "";
		private $mysql = "";
		private $con = "";

		public function __construct($id_desing)
		{
			
			$this->sql="";
			$this->id_desing = $id_desing;
			$this->resultado = "";			
		}

		public function searchId()
		{
			$con = new Connection();
			$mysql = $con->connection();
			$this->sql = 
				"SELECT *
				FROM PageLoad 
				WHERE
				State = 1 and 
				Id_desing = '".$this->id_desing."'" ;

				$resultado = mysql_query($this->sql);
				$fila = mysql_fetch_array($resultado);
				$con->disconnect($mysql);
				return $fila;
		}

	}
	
?>