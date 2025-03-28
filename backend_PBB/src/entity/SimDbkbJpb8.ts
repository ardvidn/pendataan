import { Column, Entity, Index } from "typeorm";

@Index("sim_dbkb_jpb8_pkey", ["kdDati2", "kdPropinsi", "simLbrBentMaxDbkbJpb8", "simLbrBentMinDbkbJpb8", "simThnDbkbJpb8", "simTingKolomMaxDbkbJpb8", "simTingKolomMinDbkbJpb8"], { unique: true })
@Entity("sim_dbkb_jpb8", { schema: "public" })
export class SimDbkbJpb8 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_dbkb_jpb8", length: 4 })
  simThnDbkbJpb8!: string;

  @Column("smallint", { primary: true, name: "sim_lbr_bent_min_dbkb_jpb8" })
  simLbrBentMinDbkbJpb8!: number;

  @Column("smallint", { primary: true, name: "sim_lbr_bent_max_dbkb_jpb8" })
  simLbrBentMaxDbkbJpb8!: number;

  @Column("smallint", { primary: true, name: "sim_ting_kolom_min_dbkb_jpb8" })
  simTingKolomMinDbkbJpb8!: number;

  @Column("smallint", { primary: true, name: "sim_ting_kolom_max_dbkb_jpb8" })
  simTingKolomMaxDbkbJpb8!: number;

  @Column("bigint", { name: "sim_nilai_dbkb_jpb8" })
  simNilaiDbkbJpb8!: string;
}
