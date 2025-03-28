import { Column, Entity, Index } from "typeorm";

@Index("dat_op_bumi_kibt_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdKibt", "kdPbi", "kdPebin", "kdPpbi", "kdPropinsi", "kdUpb", "noBumi", "noUrut"], { unique: true })
@Index("op_bumi_kibt_fk2", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noBumi", "noUrut"], {})
@Index("op_bumi_kibt_fk", ["kdKibt", "kdPbi", "kdPebin", "kdPpbi", "kdUpb"], {})
@Entity("dat_op_bumi_kibt", { schema: "public" })
export class DatOpBumiKibt {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("smallint", { primary: true, name: "no_bumi" })
  noBumi!: number;

  @Column("character", { primary: true, name: "kd_pebin", length: 2 })
  kdPebin!: string;

  @Column("character", { primary: true, name: "kd_pbi", length: 2 })
  kdPbi!: string;

  @Column("character", { primary: true, name: "kd_ppbi", length: 2 })
  kdPpbi!: string;

  @Column("character", { primary: true, name: "kd_upb", length: 6 })
  kdUpb!: string;

  @Column("character", { primary: true, name: "kd_kibt", length: 3 })
  kdKibt!: string;
}
