import { Column, Entity, Index } from "typeorm";

@Index("sim_target_pkey", ["kdDati2", "kdPropinsi", "kdSektor", "simThnPajakTarget"], { unique: true })
@Entity("sim_target", { schema: "public" })
export class SimTarget {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", {
    primary: true,
    name: "sim_thn_pajak_target",
    length: 4,
  })
  simThnPajakTarget!: string;

  @Column("character", { primary: true, name: "kd_sektor", length: 2 })
  kdSektor!: string;

  @Column("bigint", { name: "sim_pbb_terhutang_target" })
  simPbbTerhutangTarget!: string;
}
