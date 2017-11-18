<?php
	require_once('Connection.php');

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
			$this->sql = "SELECT
						title AS data_1,
						sub_title AS data_2,
						img AS data_3,
						primary_color AS data_4,
						accent_color AS data_5,
						windows, mac, android, ios,
						pass_code AS data_10 FROM gen_distribution WHERE state = 1 and id_design = '".$this->id_design."'";
			$resultado = mysql_query($this->sql);
			if(mysql_num_rows($resultado) > 0) {
				return $resultado;
			} else {
				return false;
			}
			$conect->close_connection($mysql);
		}

		public function downloaded() {
			$conect = new connection_handler();
			$mysql = $conect->open_connection();
			$this->sql = "SELECT download_times FROM gen_distribution WHERE state = 1 AND id_design = '". $this->id_design ."'";
			$resultado = mysql_query($this->sql);
			if(mysql_num_rows($resultado) > 0) {
				return $resultado;
			} else {
				return false;
			}
			$conect->close_connection($mysql);
		}

		public function addDownloaded($data) {
			$conect = new connection_handler();
			$mysql = $conect->open_connection();
			$this->sql = "UPDATE gen_distribution SET download_times = " . $data . " ";
			$this->sql .= "WHERE id_design = '". $this->id_design ."'";
			$resultado = mysql_query($this->sql);
			return "sql" . $this->sql;
			$conect->close_connection($mysql);
		}
	}
	
?>
