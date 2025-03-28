import { Column, Entity, Index } from "typeorm";

@Index("g23_1_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKantor", "kdKanwil", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noSrtHimbauan", "noUrut", "thnPajakHimbauan"], { unique: true })
@Index("thn_himbauan_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKantor", "kdKanwil", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noSrtHimbauan", "noUrut", "thnPajakHimbauan"], { unique: true })
@Index("g23_2_ak", ["kdBlok", "kdDati2", "kdJnsOp", "kdKantor", "kdKanwil", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noSrtHimbauan", "noUrut", "thnPajakHimbauan"], { unique: true })
@Entity("thn_himbauan", { schema: "public" })
export class ThnHimbauan {
  @Column("character", { primary: true, name: "kd_kanwil", length: 2 })
  kdKanwil!: string;

  @Column("character", { primary: true, name: "kd_kantor", length: 2 })
  kdKantor!: string;

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

  @Column("character", { primary: true, name: "no_srt_himbauan", length: 30 })
  noSrtHimbauan!: string;

  @Column("character", { primary: true, name: "thn_pajak_himbauan", length: 4 })
  thnPajakHimbauan!: string;
}
