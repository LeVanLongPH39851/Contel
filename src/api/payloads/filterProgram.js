export const filterProgram = {
    url: `${import.meta.env.VITE_API_DOMAIN}/api/v1/chart/data`,
    payload: {
        "datasource": {
            "id": 288,
            "type": "table"
        },
        "force": false,
        "queries": [
            {
                "filters": [
                    {
                        "col": "channel_name_tvd",
                        "op": "IN",
                        "val": [
                            "VTV1"
                        ]
                    }
                ],
                "extras": {
                    "having": "",
                    "where": ""
                },
                "applied_time_extras": {},
                "columns": [
                    "program_name"
                ],
                "metrics": [],
                "orderby": [
                    [
                        "program_name",
                        true
                    ]
                ],
                "annotation_layers": [],
                "row_limit": 1000,
                "series_limit": 0,
                "order_desc": true,
                "url_params": {
                    "native_filters_key": "XxQV_SEJbEJvzMInpIhhYF1bher6Lc0LEpinNFmU0OqPWxLunnQuupbCFhTk2d-Z"
                },
                "custom_params": {},
                "custom_form_data": {}
            }
        ],
        "form_data": {
            "defaultToFirstItem": false,
            "enableEmptyFilter": false,
            "inverseSelection": false,
            "multiSelect": false,
            "searchAllOptions": false,
            "datasource": "288__table",
            "groupby": [
                "program_name"
            ],
            "adhoc_filters": [],
            "extra_filters": [],
            "extra_form_data": {
                "filters": [
                    {
                        "col": "channel_name_tvd",
                        "op": "IN",
                        "val": [
                            "VTV1"
                        ]
                    }
                ]
            },
            "metrics": [
                "count"
            ],
            "row_limit": 1000,
            "showSearch": true,
            "defaultValue": [
                "THỜI SỰ 19H"
            ],
            "url_params": {
                "native_filters_key": "XxQV_SEJbEJvzMInpIhhYF1bher6Lc0LEpinNFmU0OqPWxLunnQuupbCFhTk2d-Z"
            },
            "inView": true,
            "viz_type": "filter_select",
            "type": "NATIVE_FILTER",
            "dashboardId": 68,
            "native_filter_id": "NATIVE_FILTER-mpMHp0paVe11D675MhT9w",
            "force": false,
            "result_format": "json",
            "result_type": "full"
        },
        "result_format": "json",
        "result_type": "full"
    }
};