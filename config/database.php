<?php
return [
    'default' => 'opnet',
    'fetch' => PDO::FETCH_ASSOC,
    'connections' => [
        'opnet' => [
            'driver'    => 'sqlsrv',
            'host'      => 'TESLA',
            'database'  => 'opnet',
            'username'  => 'phpuser',
            'password'  => 'letmein25',
            'prefix'    => '',
        ],
        'ecsmis' => [
			'driver'   => 'sqlsrv',
			'host'     => 'SQL-PROD',
			'database' => 'ECSMIS',
			'username' => 'ecsmis-ro',
			'password' => 'poiu43aa',
			'prefix'   => '',
        ],
    ],
];
