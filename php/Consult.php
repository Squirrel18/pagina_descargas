<?php
	require_once('connection.php');

	class consult {
		private $sql = "";
		private $id_design = "";
		private $resultado = "";
		private $mysql = "";
		private $con = "";

		public function __construct($id_design) {
			$this->sql = "";
			$this->id_design = $id_design;
			$this->resultado = "";			
		}

		public function searchId() {
			$conect = new connection_handler();
			$mysql = $conect->open_connection();
			$this->sql = "SELECT * FROM gen_distribution WHERE state = 1 and id_design = '".$this->id_design."'";
			$resultado = mysql_query($this->sql);
			if(mysql_num_rows($resultado) > 0) {
				return $resultado;
			} else {
				return false;
			}
			$conect->close_connection($mysql);
		}
	}
	
?>
