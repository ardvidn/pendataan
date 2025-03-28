import { Column, Entity, Index } from "typeorm";

@Index("sim_pbb_sum_pkey", ["kdDati2", "kdPropinsi", "kdSektor", "simThnPajakSum"], { unique: true })
@Entity("sim_pbb_sum", { schema: "public" })
export class SimPbbSum {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_pajak_sum", length: 4 })
  simThnPajakSum!: string;

  @Column("character", { primary: true, name: "kd_sektor", length: 2 })
  kdSektor!: string;

  @Column("bigint", { name: "sim_njop_bumi_sum", default: () => "0" })
  simNjopBumiSum!: string;

  @Column("bigint", { name: "sim_njop_bng_sum", default: () => "0" })
  simNjopBngSum!: string;

  @Column("bigint", { name: "sim_pbb_terhutang_sum" })
  simPbbTerhutangSum!: string;
}
